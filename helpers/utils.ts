import _ from 'lodash';

export const isServer = typeof window === 'undefined';
export const isProd = process.env.NODE_ENV === 'production';

export const sortData = (data: any) => {
  return _.reverse(_.sortBy(data, ['vote']));
};
