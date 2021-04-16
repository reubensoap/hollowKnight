package com.webapp.hollowchecklist.models;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "player", catalog="todos")
public class Player {
	
	@Id
	@Column(name = "playerid")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer playerid;
	
	private int completionStat;
	private int nailArts;
	private int nail;
	private int maskShards;
	private int vesselFragments;
	private int essense;
	private int colosseum;
	private int lifeBlood;
	
	private int[] godmaster;
	private int[] grim;
	private int[] warriorDreams;
	private int[] spells;
	private int[] equipment;
	private int[] dreamers;
	private int[] charms;
	private int[] bosses;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn
	@JsonIgnore
	private User user;
	
	public Player () {
		this.completionStat = 0;
		this.nailArts = 0;
		this.nail = 0;
		this.maskShards = 0;
		this.vesselFragments = 0;
		this.essense = 0;
		this.colosseum = 0;
		this.lifeBlood = 0;
		this.godmaster = new int[5];
		this.grim = new int[6];
		this.warriorDreams = new int[7];
		this.spells = new int[6];
		this.equipment = new int[7];
		this.dreamers = new int[3];
		this.charms = new int[36];
		this.bosses = new int[14];
	}
	
	public void subCompletionStat() {
		this.completionStat -= 1;
	}
	
	public void addCompletionStat() {
		if(this.completionStat < 112) {
			this.completionStat += 1;
		}
	}

	public Integer getPlayerid() {
		return playerid;
	}

	public void setPlayerid(Integer playerid) {
		this.playerid = playerid;
	}

	public int getCompletionStat() {
		return completionStat;
	}

	public void setCompletionStat(int completionStat) {
		this.completionStat = completionStat;
	}

	public int getNailArts() {
		return nailArts;
	}

	public void setNailArts(int nailArts) {
		this.nailArts = nailArts;
	}

	public int getNail() {
		return nail;
	}

	public void setNail(int nail) {
		this.nail = nail;
	}

	public int getMaskShards() {
		return maskShards;
	}

	public void setMaskShards(int maskShards) {
		this.maskShards = maskShards;
	}

	public int getVesselFragments() {
		return vesselFragments;
	}

	public void setVesselFragments(int vesselFragments) {
		this.vesselFragments = vesselFragments;
	}

	public int getEssense() {
		return essense;
	}

	public void setEssense(int essense) {
		this.essense = essense;
	}

	public int getColosseum() {
		return colosseum;
	}

	public void setColosseum(int colosseum) {
		this.colosseum = colosseum;
	}

	public int getLifeBlood() {
		return lifeBlood;
	}

	public void setLifeBlood(int lifeBlood) {
		this.lifeBlood = lifeBlood;
	}

	public int[] getGodmaster() {
		return godmaster;
	}

	public void setGodmaster(int[] godmaster) {
		this.godmaster = godmaster;
	}

	public int[] getGrim() {
		return grim;
	}

	public void setGrim(int[] grim) {
		this.grim = grim;
	}

	public int[] getWarriorDreams() {
		return warriorDreams;
	}

	public void setWarriorDreams(int[] warriorDreams) {
		this.warriorDreams = warriorDreams;
	}

	public int[] getSpells() {
		return spells;
	}

	public void setSpells(int[] spells) {
		this.spells = spells;
	}

	public int[] getEquipment() {
		return equipment;
	}

	public void setEquipment(int[] equipment) {
		this.equipment = equipment;
	}

	public int[] getDreamers() {
		return dreamers;
	}

	public void setDreamers(int[] dreamers) {
		this.dreamers = dreamers;
	}

	public int[] getCharms() {
		return charms;
	}

	public void setCharms(int[] charms) {
		this.charms = charms;
	}

	public int[] getBosses() {
		return bosses;
	}

	public void setBosses(int[] bosses) {
		this.bosses = bosses;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	
	
	
	

}
