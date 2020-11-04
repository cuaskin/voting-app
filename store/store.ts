import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { isProd } from 'helpers/utils';
import reducer, { initialState } from './reducer';

const withThunk = applyMiddleware(thunk);

const withMiddleware = isProd ? withThunk : composeWithDevTools(withThunk);

export const initializeStore = (state: any) => {
  return createStore(reducer, { ...initialState, ...state }, withMiddleware);
};
