import { createContext, useState } from 'react';

import Questions from './components/Questions/Questions';

export const QuestionsContext = createContext();

const questions = [
  {
    q: 'What is React?',
    a: [
      'A library for managing user interfaces',
      'A11 declarative, efficient, and flexible JavaScript library',
      'A22 declarative, efficient, and flexible JavaScript library',
      'A33 declarative, efficient, and flexible JavaScript library',
    ],
  },
  {
    q: 'What is Redux?',
    a: [
      '5A declarative, efficient, and flexible JavaScript library',
      '6A declarative, efficient, and flexible JavaScript library',
      '7A declarative, efficient, and flexible JavaScript library',
      '8A declarative, efficient, and flexible JavaScript library',
    ],
  },
  {
    q: 'What is Context?',
    a: [
      '1A declarative, efficient, and flexible JavaScript library',
      '2A declarative, efficient, and flexible JavaScript library',
      '3A declarative, efficient, and flexible JavaScript library',
      '4A declarative, efficient, and flexible JavaScript library',
    ],
  },
  {
    q: 'What is Context?',
    a: [
      '12A declarative, efficient, and flexible JavaScript library',
      '22A declarative, efficient, and flexible JavaScript library',
      '32A declarative, efficient, and flexible JavaScript library',
      '42A declarative, efficient, and flexible JavaScript library',
    ],
  },
];

function App() {
  const [questionsState, setQuestionsState] = useState({
    currentQuestion: 0,
    answers: [],
    correctAnswers: [0, 3, 2, 3],
  });
  return (
    <QuestionsContext.Provider
      value={{ questionsState, setQuestionsState, questions }}
    >
      <Questions />
    </QuestionsContext.Provider>
  );
}

export default App;
