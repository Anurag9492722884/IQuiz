package com.example.check.serviceImpl;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.check.model.Question;
import com.example.check.model.Quiz;
import com.example.check.model.Score;
import com.example.check.repository.QuestionRepository;
import com.example.check.repository.QuizRepository;
import com.example.check.repository.ScoreRepository;
// import com.example.check.repository.Transaction;
import com.example.check.service.QuizService;

@Service
public class QuizServiceImpl implements QuizService{
	@Autowired
	private QuizRepository quizrepository;
	@Autowired
	private QuestionRepository questionrepository;
	@Autowired
	private ScoreRepository scorerepository;
	@Override
	public List<Quiz> getAllquizzespresent() {
		return quizrepository.findAll();
	}

	@Override
	public void CreateAQuiz(Quiz q) {
		q.getQuestions().forEach(question->question.setQuiz(q));
	    quizrepository.save(q);
	}

	@Override
	public String DeleteAQuiz(Long id) {
		Optional<Quiz> gg = quizrepository.findById(id);
		if(!gg.isEmpty())
		{
			quizrepository.deleteById(id);
			return "Quiz Deleted Successfully";
		}
		else {
			return "Quiz with this id does not exists";
		}
	}

	@Override
	public String AddAQuestion(Long id, Question request) {
		Quiz quiz = quizrepository.getById(id);
		request.setQuiz(quiz);
		questionrepository.save(request);
		return "Question created!";
	}

	@Override
	public String RemoveAQuestion(Long quiz_id, Long question_id) {
		// TODO Auto-generated method stub
		questionrepository.deleteById(question_id);
		return "Question Deleted Successfully";
	}

	@Override
	public String AddScore(Score ss) {
		// TODO Auto-generated method stub
		scorerepository.save(ss);
		return "Score has been added for the quiz";
	}

	@Override
	public List<Score> GetAll() {
		// TODO Auto-generated method stub
		return scorerepository.findAll();
	}

	@Override
	public Optional<Quiz> GetAllQuestions(Long quiz_id) {
		return quizrepository.findById(quiz_id);
	}

	@Override
	public String UpdateAQuestion( Long question_id, Question qq) {
		Question gg = questionrepository.getById(question_id);
		gg.setAnswer(qq.getAnswer());
		gg.setOption1(qq.getOption1());
		gg.setOption2(qq.getOption2());
		gg.setOption3(qq.getOption3());
		gg.setOption4(qq.getOption4());
		gg.setQuestion(qq.getQuestion());
		questionrepository.save(gg);
		return "Question under the quiz updated successfully.";
	}

	@Override
	public List<Score> ScoreForAQuiz(String quizname) {
		// TODO Auto-generated method stub
		return scorerepository.findbyquizname(quizname);
	}

	@Override
	@Transactional
	public String DeleteScoreQuiz(String quiz_name) {
		// TODO Auto-generated method stub
		scorerepository.deletebyquizname(quiz_name);
		return "All scores for "+quiz_name+" deleted successfully.";
	}

	
}
