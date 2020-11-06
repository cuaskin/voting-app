import React from 'react';
import { fetchQuery } from 'store/actions';

import Header from 'components/Header';
import Layout from 'layout';
import allEmployee from 'graphql/query/allEmployee';
import DataTable from 'components/DataTable';

const Index = () => {
  return (
    <Layout>
      <DataTable />
    </Layout>
  );
};

Index.getInitialProps = async ({ reduxStore: { dispatch } }) => {
  await dispatch(fetchQuery({ query: allEmployee }));
  return {};
};

export default Index;
