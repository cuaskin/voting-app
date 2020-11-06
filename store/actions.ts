import types from './types';
import getConfig from 'next/config';
import { isServer, isProd } from 'helpers/utils';
import fetch from 'node-fetch';
import _ from 'lodash';

const { LOCAL_GRAPHQL_HOST } = getConfig().publicRuntimeConfig;
const GRAPHQL_API = LOCAL_GRAPHQL_HOST;

export const setData = (data: any) => ({
  type: types.SET_DATA,
  data,
});

const fetchGraphQL = (body) => {
  return fetch(GRAPHQL_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((res: any) => {
      if (res.errors) {
        throw new Error(JSON.stringify(res.errors));
      }
      return res.json();
    })
    .catch(async (err) => {
      return null;
    });
};

export const fetchMutation: FetchMutation = (body) => {
  return async (dispatch, getState) => {
    const res = await fetchGraphQL(body);
    if (!isServer && res) {
      const employee = res.data.patchEmployee;
      console.log('getState', res.data.patchEmployee);
      const allEmployee = getState().allEmployee.map((o: IDataEmployee) => {
        if (o?.id === employee?.id) {
          return { ...o, vote: employee.vote };
        }
        return o;
      });
      await dispatch(setData({ allEmployee }));
      return allEmployee;
    }
    return {};
  };
};

export const fetchQuery: FetchQuery = (body) => {
  return async (dispatch) => {
    const res = await fetchGraphQL(body);
    await dispatch(setData(res.data));
    return res;
  };
};
