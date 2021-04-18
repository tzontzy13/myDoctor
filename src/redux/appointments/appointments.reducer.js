import { AppsActionTypes } from './appointment.types';

const INITIAL_STATE = {
   appointments: []
};

// holds all appointments state, element of redux

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
