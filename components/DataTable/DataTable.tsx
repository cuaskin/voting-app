import React, { Component } from 'react';
import Row from './Row';

interface DataTableProps {
  data: IDataEmployee[];
}

class Datatable extends Component<DataTableProps> {
  render() {
    const { data } = this.props;
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
          {data.map((item) => (
            <Row key={item.id} rowData={item} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default Datatable;
