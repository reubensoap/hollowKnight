package com.webapp.hollowchecklist.controller;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.webapp.hollowchecklist.exception.UnauthorizedException;
import com.webapp.hollowchecklist.models.AuthenticationRequest;
import com.webapp.hollowchecklist.models.AuthenticationResponse;
import com.webapp.hollowchecklist.models.Player;
import com.webapp.hollowchecklist.models.User;
import com.webapp.hollowchecklist.repository.PlayerRepository;
import com.webapp.hollowchecklist.repository.UserRepository;
import com.webapp.hollowchecklist.security.JwtUtil;
import com.webapp.hollowchecklist.security.MyUserDetailsService;


@RestController
@PreAuthorize("isAuthenticated()")   
@RequestMapping("/")
public class HollowController {
	
	@Autowired
	UserRepository userRepository;
	@Autowired
	PlayerRepository playerRepository;
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	JwtUtil jwtTokenUtil;
	@Autowired
	private MyUserDetailsService userDetailsService;
	
	@PreAuthorize("permitAll()")
	@PostMapping(value = "/login")
	public ResponseEntity<?> login(@RequestBody AuthenticationRequest authRequest) throws Exception{
		try {
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(authRequest.getUsername(),authRequest.getPassword()));

		}
		catch(BadCredentialsException e) {
			throw new UnauthorizedException("Incorrect username or password");
		}
		final UserDetails userDetails = userDetailsService.loadUserByUsername(authRequest.getUsername());
		final String jwt = jwtTokenUtil.generateToken(userDetails);
		return ResponseEntity.ok(new AuthenticationResponse(jwt));
	}
	
	@PreAuthorize("permitAll()")
	@PostMapping(value = "/signup")
	public User signup(@RequestBody User user){
		if(userRepository.existsByUserName(user.getUserName())) {
			throw new BadCredentialsException("User name not available.");
		}
		user.setRoles("accountholder");
		Player player = new Player();
		user.setPlayer(player);
		player.setUser(user);
		userRepository.save(user);
		playerRepository.save(player);
		return user;
	}
	
	@PreAuthorize("hasAuthority('accountholder')")
	@GetMapping(value = "/playerStat")
	public Player getPlayer(Principal token) {
		User user = userRepository.findByUserName(token.getName()).get();
		return playerRepository.getOne(user.getPlayer().getPlayerid()) ;
	}
	
	@PreAuthorize("permitAll()")
	@PostMapping(value = "/addMask")
	public Player addMask(Principal token) {
		User user = userRepository.findByUserName(token.getName()).get();
		Player player = playerRepository.getOne(user.getPlayer().getPlayerid());
		if(player.getMaskShards() < 4) {
			player.setMaskShards(player.getMaskShards() + 1);
			player.addCompletionStat();
		}
		userRepository.save(user);
		return player;
	}
	
	@PreAuthorize("permitAll()")
	@PostMapping(value = "/removeMask")
	public Player removeMask(Principal token) {
		User user = userRepository.findByUserName(token.getName()).get();
		Player player = playerRepository.getOne(user.getPlayer().getPlayerid());
		if(player.getMaskShards() > 0) {
			player.setMaskShards(player.getMaskShards() - 1);
			player.subCompletionStat();
		}
		userRepository.save(user);
		return player;
	}
	
	@PreAuthorize("permitAll()")
	@PostMapping(value = "/testCreate")
	public User tester(){
		User test = new User();
		test.setRoles("acountholder");
		test.setUserName("admin");
		test.setPassword("password123");
		Player player = new Player();
		test.setPlayer(player);
		player.setUser(test);
		userRepository.save(test);
		playerRepository.save(player);
		return test;
	}
	
}
