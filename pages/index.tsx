import React from 'react';
import { connect } from 'react-redux';
import { setData } from 'store/actions';
import Header from 'components/Header';
import Layout from 'layout';

const Index = () => {
  return (
    <Layout>
      <Header />
    </Layout>
  );
};

export default Index;
