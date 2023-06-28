package com.example.check.service;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.RequestBody;

import com.example.check.model.Question;
import com.example.check.model.Quiz;
import com.example.check.model.Score;


public interface QuizService {
	List<Quiz> getAllquizzespresent();
	void CreateAQuiz(Quiz q);
	String DeleteAQuiz(Long id);
	String AddAQuestion(Long id,Question request);
	String RemoveAQuestion(Long quiz_id,Long question_id);
	String AddScore(Score ss);
	List<Score> GetAll();
	Optional<Quiz> GetAllQuestions(Long quiz_id);
	String UpdateAQuestion(Long question_id,Question qq);
	List<Score> ScoreForAQuiz(String quizname);
	String DeleteScoreQuiz(String quiz_name);
}
