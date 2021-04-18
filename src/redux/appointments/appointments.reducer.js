import { AppsActionTypes } from './appointment.types';

const INITIAL_STATE = {
   appointments: []
};

const appsReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case AppsActionTypes.SET_APPS:
         return {
            ...state,
            appointments: action.payload,
         };
      default:
         return state;
   }
};

export default appsReducer;
