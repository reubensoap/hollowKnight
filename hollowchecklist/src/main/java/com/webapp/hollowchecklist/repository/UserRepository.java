package com.webapp.hollowchecklist.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.webapp.hollowchecklist.models.User;

public interface UserRepository extends JpaRepository<User, Integer>{
	Optional<User> findByUserName(String userName);

	Boolean existsByUserName(String userName);
}
