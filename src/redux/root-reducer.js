import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import appsReducer from './appointments/appointments.reducer'

export default combineReducers({
   user: userReducer,
   apps: appsReducer
});
