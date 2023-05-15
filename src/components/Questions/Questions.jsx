import { useContext, useState, useEffect } from 'react';
import { QuestionsContext } from '../../App';

function Questions() {
  const { questionsState, setQuestionsState, questions } =
    useContext(QuestionsContext);

  const [score, setScore] = useState(0);

  const currentQuestion = questionsState.currentQuestion;
  const conditionStateQuestion = currentQuestion < questions.length;

  function getNextQuestion(index) {
    setQuestionsState({
      ...questionsState,
      currentQuestion: currentQuestion + 1,
      answers: [...questionsState.answers, index],
    });
  }

  function calculateScore() {
    const correctAnswers = questionsState.correctAnswers;
    const answers = questionsState.answers;
    let tempScore = 0;

    correctAnswers.map((value, index) => {
      if (value === answers[index]) {
        tempScore++;
      }
    });
    setScore(tempScore);
  }

  useEffect(() => {
    if (!conditionStateQuestion) {
      //! Підкажіть що не так з цим рішенням, мені здається що можна було зробити краще.
      //! Що використання useEffect тут не доцільно. Чи правильна моя думка?
      calculateScore();
    }
  });

  function resetQuestions() {
    setQuestionsState({
      ...questionsState,
      currentQuestion: 0,
      answers: [],
    });
    setScore(0);
  }

  return (
    <div className="questions">
      {conditionStateQuestion ? (
        <>
          <h2>{questions[currentQuestion].q}</h2>
          {questions[currentQuestion].a.map((value, index) => (
            <li key={index}>
              {value}{' '}
              <button
                onClick={() => {
                  getNextQuestion(index);
                }}
              >
                Confirm answer
              </button>
            </li>
          ))}
          <h3>
            Question {currentQuestion}/{questions.length}
          </h3>
        </>
      ) : (
        <>
          <h1>Your Results</h1>
          <h1>
            Your score is: {score} / {questions.length}
          </h1>
          <button onClick={resetQuestions}>Reset</button>
        </>
      )}
    </div>
  );
}

export default Questions;
