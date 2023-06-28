package com.example.check.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.check.model.Score;



public interface ScoreRepository extends JpaRepository<Score, Long> {
	@Query("from Score u where quizname=:n")
	public List<Score> findbyquizname(@Param("n") String quiz_name);
	
	@Modifying
	
	@Query("delete from Score where quizname=:n")
	public void deletebyquizname(@Param("n") String quiz_name);
}
