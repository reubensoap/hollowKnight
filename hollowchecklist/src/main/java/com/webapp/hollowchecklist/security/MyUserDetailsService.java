package com.webapp.hollowchecklist.security;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.webapp.hollowchecklist.models.MyUserDetails;
import com.webapp.hollowchecklist.models.User;
import com.webapp.hollowchecklist.repository.UserRepository;


@Service
public class MyUserDetailsService implements UserDetailsService {
	@Autowired
	UserRepository userRepository;
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<User> user = userRepository.findByUserName(username);
		
		user.orElseThrow(() -> new UsernameNotFoundException("User not found."));
		return user.map(MyUserDetails::new).get();
	}
}
