import React from 'react';
import { NextPage } from 'next';
import { connect } from 'react-redux';
import { setData, fetchQuery } from 'store/actions';
import Header from 'components/Header';
import Layout from 'layout';
import allEmployee from 'graphql/query/allEmployee';

const Index = () => {
  return (
    <Layout>
      <Header />
    </Layout>
  );
};

Index.getInitialProps = async ({ reduxStore: { dispatch } }) => {
  await dispatch(fetchQuery({ query: allEmployee }));
  return {};
};

export default Index;
