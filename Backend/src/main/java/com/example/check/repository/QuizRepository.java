package com.example.check.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.check.model.Quiz;




public interface QuizRepository extends JpaRepository<Quiz, Long>{
	
}
