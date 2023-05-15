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
    <>
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
                tttt
              </button>
            </li>
          ))}
        </>
      ) : (
        <>
          <h2>Your Results</h2>
          <p>{score}/4</p>
          <button onClick={resetQuestions}>Reset</button>
        </>
      )}
    </>
  );
}

export default Questions;
