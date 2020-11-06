import React, { FC } from 'react';
import { Router } from 'routes';
import patchEmployee from 'graphql/mutation/patchEmployee';
import allEmployee from 'graphql/query/allEmployee';

import { connect } from 'react-redux';
import { fetchQuery, fetchMutation } from 'store/actions';

import Vote from 'components/Vote';
import Avatar from 'components/Avatar';

interface RowProps {
  rowData: IDataEmployee;
  fetchQuery: FetchQuery;
  fetchMutation: FetchMutation;
}

const Row: FC<RowProps> = ({ rowData, fetchQuery, fetchMutation }) => {
  const onClick = () => {
    Router.pushRoute(`/profile/${rowData.id}`);
  };

  const onVote = async () => {
    await fetchMutation({
      query: patchEmployee,
      variables: {
        id: rowData.id,
        vote: rowData.vote + 1,
      },
    });
  };

  return (
    <tr>
      <td onClick={onClick}>
        <Avatar rowData={rowData} />
      </td>
      <td>{rowData.title}</td>
      <td>{rowData.firstName}</td>
      <td>{rowData.lastName}</td>
      <td>{rowData.vote}</td>
      <td>
        <Vote onClick={onVote} />
      </td>
    </tr>
  );
};

export default connect(null, { fetchQuery, fetchMutation })(Row);
