import Vote from './Vote';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(null, mapDispatchToProps)(Vote);
