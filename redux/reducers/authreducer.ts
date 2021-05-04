import { actionenum, actiontyps, initialstate } from "../../types/authreducer";

const initialvalue: initialstate = {
  loading: false,
  error: null,
  user: null,
  message:null
};
export const authreducer = (
  state = initialvalue,
  action: actiontyps
): initialstate => {
  switch (action.type) {
    case actionenum.logi_request:
      return {
        ...state,
        loading: true,
      };
    case actionenum.logi_success:
      return {
        ...state,
        loading: false,
        message: action.message,
        error:null,
        user:action.payload
      };
      case actionenum.logi_failure:
        return {
          ...state,
          loading: false,
          message:action.payload,
          error:action.payload,
          user:null
        }; 
        case actionenum.clear_message:
          return {
            ...state,
            message:null
          };    
    default:
      return state;
  }
};
