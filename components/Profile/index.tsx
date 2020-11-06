import Profile from './Profile';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  data: state.getEmployee || [],
});

export default connect(mapStateToProps)(Profile);
