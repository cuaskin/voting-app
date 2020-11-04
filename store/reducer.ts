import types from './types';

export const initialState: InitialState = {};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case types.SET_DATA: {
      return { ...state, ...action.data };
    }
  }
  return state;
};

export default reducer;
