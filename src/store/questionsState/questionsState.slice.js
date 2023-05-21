import { createSlice } from '@reduxjs/toolkit';

export const questionsStateSlice = createSlice({
  name: 'questionsState',
  initialState: {
    currentQuestion: 0,
    answers: [],
    correctAnswers: [0, 2, 3, 3],
    questions: [
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
    ],
  },
  reducers: {
    getNextQuestion: (state, action) => {
      state.currentQuestion = state.currentQuestion + 1;
      state.answers.push(action.payload);
    },
    resetQuestions: (state) => {
      state.currentQuestion = 0;
      state.answers = [];
    },
  },
});

export const { actions, reducer } = questionsStateSlice;
