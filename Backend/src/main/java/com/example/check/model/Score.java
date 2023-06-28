package com.example.check.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="score")
public class Score {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String quizname;
	private Long score;
	private String username;
	public Score(String quizname, Long score, String username) {
		super();
		this.quizname = quizname;
		this.score = score;
		this.username = username;
	}
	public Score() {
		super();
	}
	public Score(Long id, String quizname, Long score, String username) {
		super();
		this.id = id;
		this.quizname = quizname;
		this.score = score;
		this.username = username;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getQuizname() {
		return quizname;
	}
	public void setQuizname(String quizname) {
		this.quizname = quizname;
	}
	public Long getScore() {
		return score;
	}
	public void setScore(Long score) {
		this.score = score;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	@Override
	public String toString() {
		return "Score [id=" + id + ", quizname=" + quizname + ", score=" + score + ", username=" + username
				+ ", getId()=" + getId() + ", getQuizname()=" + getQuizname() + ", getScore()=" + getScore()
				+ ", getUsername()=" + getUsername() + ", getClass()=" + getClass() + ", hashCode()=" + hashCode()
				+ ", toString()=" + super.toString() + "]";
	}
	
	
		
}
