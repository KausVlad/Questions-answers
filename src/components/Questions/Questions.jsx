import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/questionsState/questionsState.slice';

function Questions() {
  const [score, setScore] = useState(0);

  const { questionsState } = useSelector((state) => state);
  const dispatch = useDispatch();

  const currentQuestion = questionsState.currentQuestion;
  const conditionStateQuestion =
    currentQuestion < questionsState.questions.length;

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
    dispatch(actions.resetQuestions());
    setScore(0);
  }

  return (
    <div className="questions">
      {conditionStateQuestion ? (
        <>
          <h2>{questionsState.questions[currentQuestion].q}</h2>
          {questionsState.questions[currentQuestion].a.map((value, index) => (
            <li key={index}>
              {value}{' '}
              <button
                onClick={() => {
                  // getNextQuestion(index);
                  dispatch(actions.getNextQuestion(index));
                }}
              >
                Confirm answer
              </button>
            </li>
          ))}
          <h3>
            Question {currentQuestion}/{questionsState.questions.length}
          </h3>
        </>
      ) : (
        <>
          <h1>Your Results</h1>
          <h1>
            Your score is: {score} / {questionsState.questions.length}
          </h1>
          <button onClick={resetQuestions}>Reset</button>
        </>
      )}
    </div>
  );
}

export default Questions;
