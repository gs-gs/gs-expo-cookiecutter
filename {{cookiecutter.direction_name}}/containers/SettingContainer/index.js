import { connect } from 'react-redux';
import SettingComponent from '../../components/SettingComponent';
import { getFlags } from '../../reducers/flags';

const mapStateToProp = state => ({
  flags: getFlags(state),
});
export default connect(mapStateToProp)(SettingComponent);
