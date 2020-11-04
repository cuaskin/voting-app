import types from './types';

export const setData = (data: any) => ({
  type: types.SET_DATA,
  data,
});
