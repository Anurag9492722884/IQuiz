package com.example.check.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.check.model.Question;

public interface QuestionRepository  extends JpaRepository<Question, Long>{

}
