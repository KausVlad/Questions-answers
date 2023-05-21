import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { reducer as questionsStateReducer } from './questionsState/questionsState.slice';

const reducers = combineReducers({
  questionsState: questionsStateReducer,
});
export const store = configureStore({
  reducer: reducers,
  devTools: true,
});
