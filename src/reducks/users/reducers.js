import * as Actions from "./actions";
import initialState from "../store/initialState";

//第一引数に引数にstate
//第二引数にactionがreturnした値
export const UsersReducer = (state = initialState.users, action) => {
  //Actionsのtypeに応じてstateをどう変更するか決める(switch文)
  switch (action.type) {
    case Actions.SIGN_IN:
      return {
        ...state,
        ...action.payload,
      };
    case Actions.SIGN_OUT:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};
