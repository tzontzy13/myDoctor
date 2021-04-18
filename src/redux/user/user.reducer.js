import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
   currentUser: null,
   wasUserChecked: false
};

const userReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case UserActionTypes.SET_USER:
         return {
            ...state,
            currentUser: action.payload,
            wasUserChecked: true
         };
      default:
         return state;
   }
};

export default userReducer;
