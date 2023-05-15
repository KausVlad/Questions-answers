import { createContext, useState } from 'react';
import './App.scss';

import Questions from './components/Questions/Questions';

export const QuestionsContext = createContext();

const questions = [
  {
    q: 'What is React?',
    a: [
      'JavaScript library for building user interfaces.',
      'Programming language.',
      'Server-side framework.',
      'Database management system.',
    ],
  },
  {
    q: 'What is Redux?',
    a: [
      'Programming language used for building mobile applications.',
      'Database management system for storing and retrieving data.',
      'State management library for JavaScript applications.',
      'Server-side framework for building web APIs.',
    ],
  },
  {
    q: 'What is Context?',
    a: [
      'Styling library for applying CSS to components.',
      'Form validation framework for handling user input.',
      'Server-side rendering tool for improved performance.',
      'Feature that allows data to be passed down through the component tree without explicit prop passing.',
    ],
  },
  {
    q: 'What is JSX?',
    a: [
      'Styling syntax for applying CSS to components.',
      'Server-side rendering technique for improved performance.',
      'State management library for handling component state.',
      'Syntax extension that allows writing HTML-like code in JavaScript.',
    ],
  },
];

function App() {
  const [questionsState, setQuestionsState] = useState({
    currentQuestion: 0,
    answers: [],
    correctAnswers: [0, 2, 3, 3],
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
