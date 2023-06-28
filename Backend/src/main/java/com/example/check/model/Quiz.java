package com.example.check.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.PostPersist;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="quiz")
public class Quiz {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String heading;
	@JsonManagedReference
	@OneToMany(mappedBy = "quiz",cascade = CascadeType.ALL,fetch = FetchType.LAZY,orphanRemoval = true)
	private List<Question> questions;
	public Quiz(String heading, List<Question> questions) {
		super();
		this.heading = heading;
		this.questions = questions;
	}
	public Quiz() {
		super();
	}
	public Quiz(Long id, String heading, List<Question> questions) {
		super();
		this.id = id;
		this.heading = heading;
		this.questions = questions;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getHeading() {
		return heading;
	}
	public void setHeading(String heading) {
		this.heading = heading;
	}
	public List<Question> getQuestions() {
		return questions;
	}
	public void setQuestions(List<Question> questions) {
		this.questions = questions;
	}
	@Override
	public String toString() {
		return "Quiz [id=" + id + ", heading=" + heading + ", questions=" + questions + ", getId()=" + getId()
				+ ", getHeading()=" + getHeading() + ", getQuestions()=" + getQuestions() + ", getClass()=" + getClass()
				+ ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	}
	
}
