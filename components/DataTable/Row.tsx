import React, { FC } from 'react';

import Vote from 'components/Vote';
import Avatar from 'components/Avatar';

interface RowProps {
  rowData: IDataEmployee;
}

const Row: FC<RowProps> = ({ rowData }) => {
  return (
    <tr>
      <td>
        <Avatar rowData={rowData} />
      </td>
      <td>{rowData.title}</td>
      <td>{rowData.firstName}</td>
      <td>{rowData.lastName}</td>
      <td>{rowData.vote}</td>
      <td>
        <Vote />
      </td>
    </tr>
  );
};

export default Row;
