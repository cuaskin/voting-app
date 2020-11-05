import types from './types';
import getConfig from 'next/config';
import { isServer, isProd } from 'helpers/utils';
import fetch from 'node-fetch';
import _ from 'lodash';

const {
  LOCAL_GRAPHQL_HOST,
  TEST_GRAPHQL_HOST,
} = getConfig().publicRuntimeConfig;

const GRAPHQL_API = isServer && isProd ? TEST_GRAPHQL_HOST : LOCAL_GRAPHQL_HOST;

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
  return async (dispatch) => {
    const res = await fetchGraphQL(body);
    if (!isServer && res) {
      await dispatch(setData(res));
      return res;
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
