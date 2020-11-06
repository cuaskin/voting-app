import DataTable from './DataTable';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  data: state.allEmployee || [],
});

export default connect(mapStateToProps)(DataTable);
