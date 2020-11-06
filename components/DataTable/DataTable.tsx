import React, { FC } from 'react';
import Row from './Row';
import { sortData } from 'helpers/utils';

interface DataTableProps {
  data: IDataEmployee[];
}

const Datatable: FC<DataTableProps> = ({ data }) => {
  const sortedData = sortData(data);
  return (
    <table>
      <thead>
        <tr>
          <th>Photo</th>
          <th>Title</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Vote</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item) => (
          <Row key={item.id} rowData={item} />
        ))}
      </tbody>
    </table>
  );
};

export default Datatable;
