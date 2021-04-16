package com.webapp.hollowchecklist.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.webapp.hollowchecklist.models.Player;

public interface PlayerRepository extends JpaRepository<Player, Integer>{

}
