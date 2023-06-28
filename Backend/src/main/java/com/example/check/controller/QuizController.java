package com.example.check.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.check.model.Question;
import com.example.check.model.Quiz;
import com.example.check.model.Score;
import com.example.check.repository.QuestionRepository;
import com.example.check.repository.QuizRepository;
import com.example.check.response_pojo.UserScore;
import com.example.check.serviceImpl.QuizServiceImpl;

import java.util.*;

@RestController
@RequestMapping("/api/Quiz")
public class QuizController {
	@Autowired
	private QuizServiceImpl quizserviceimpl;
	
	@Autowired
	private QuizRepository quizrepository;
	
	@RequestMapping("/getAllQuizzes")
	List<Quiz> getAll(){
		return quizserviceimpl.getAllquizzespresent();
	}
	@RequestMapping("/AddAQuestion/{quiz_id}")
	String adding_a_question(@PathVariable("quiz_id") Long id,@RequestBody Question request){
		return quizserviceimpl.AddAQuestion(id, request);
	}
	
	@RequestMapping("/GetAllQuestions/{quiz_id}")
	Optional<Quiz> getting_all_questions(@PathVariable("quiz_id") Long id){
		return quizserviceimpl.GetAllQuestions(id);
	}
	@RequestMapping("/ScoreForQuiz/{quiz_name}")
	List<UserScore> scores_of_a_quiz(@PathVariable("quiz_name") String quiz_name){
		List<Score> gg = quizserviceimpl.ScoreForAQuiz(quiz_name);
		 HashMap<String, Long> charCountMap
         = new HashMap<String, Long>();
		 gg.forEach(it->{
			 if (charCountMap.containsKey(it.getUsername())) {
				 
	                // If char is present in charCountMap,
	                // incrementing it's count by 1
	                charCountMap.put(it.getUsername(), Math.max(it.getScore(),charCountMap.get(it.getUsername())));
	            }
	            else {
	 
	                // If char is not present in charCountMap,
	                // putting this char to charCountMap with 1 as it's value
	                charCountMap.put(it.getUsername(), it.getScore());
	            } 
		 });
		 List<UserScore> mew = new ArrayList<>();
		 for (Map.Entry entry : charCountMap.entrySet()) {
			 	UserScore tt = new UserScore();

	            String name = (String) entry.getKey();
	            Long number = (Long) entry.getValue();
			 	tt.setUserame(name);
			 	tt.setNumber(number);
			 	mew.add(tt);
	        }
//		 Collections.sort(mew, (o1, o2) -> o1.getNumber() - o2.getNumber());
		 
		 Collections.sort(mew, new Comparator<UserScore>(){
			   public int compare(UserScore o1, UserScore o2){
			      return (int) (o1.getNumber() - o2.getNumber());
			   }
			});
		 
		 Collections.reverse(mew);
		return mew;
	}
	@RequestMapping("/DeleteScoreQuiz/{quiz_name}")
	String delete_scores_of_a_quiz(@PathVariable("quiz_name") String quiz_name){
		return quizserviceimpl.DeleteScoreQuiz(quiz_name);
	}
	@RequestMapping("/AddScore")
	String adding_a_question(@RequestBody Score ss){
		System.out.println(ss);
		return quizserviceimpl.AddScore(ss);
	}
	@RequestMapping("/GetAllScores")
	List<Score> getting_all_scores(){
		return quizserviceimpl.GetAll();
	}
	@RequestMapping("/RemoveAQuestion/{quiz_id}/{question_id}")
	String removing_a_question(@PathVariable("quiz_id") Long quiz_id,@PathVariable("question_id") Long question_id){
		return quizserviceimpl.RemoveAQuestion(quiz_id, question_id);
	}
	@RequestMapping("/UpdateAQuestion/{question_id}")
	String updating_a_question(@PathVariable("question_id") Long question_id,@RequestBody Question qq){
		return quizserviceimpl.UpdateAQuestion(question_id,qq);
	}
	@RequestMapping("/createQuiz")
	String createQuiz(@RequestBody Quiz quiz){
		quizserviceimpl.CreateAQuiz(quiz);
		return "Quiz Created";
	}
	@RequestMapping("/deleteAQuiz/{id}")
	String createQuiz(@PathVariable("id") Long id){
		return quizserviceimpl.DeleteAQuiz(id);
	}
}
