import React from 'react';
import { fetchQuery } from 'store/actions';
import getEmployee from 'graphql/query/getEmployee';

import Layout from 'layout';
import Profile from 'components/Profile';

const MyProfile = () => {
  return (
    <Layout>
      <Profile />
    </Layout>
  );
};

MyProfile.getInitialProps = async ({ reduxStore: { dispatch }, query }) => {
  console.log('query', query);
  await dispatch(
    fetchQuery({
      query: getEmployee,
      variables: {
        id: query.id,
      },
    })
  );
  return {};
};

export default MyProfile;
