import { combineReducers } from 'redux';

import uptimes from './uptimes/reducer';
import domains from './domains/reducer';

export default combineReducers({
  uptimes,
  domains,
});
