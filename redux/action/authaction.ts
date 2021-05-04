import { actionenum } from "../../types/authreducer";
import { axiosinstance } from "../../utils/axios";
import { actiontypes } from "../reducers/alert";
export const register = (user) => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionenum.logi_request });
      await axiosinstance
        .post("/auth/register", user)
        .then((res) => {
          console.log("resss", res);
          dispatch({ type: actionenum.logi_success, payload: res.data ,message: "authenticating succes"});
          dispatch({
            type: actiontypes.show_alert,
            payload: "registret successfully",
          });
        })
        .catch((err) => {
          dispatch({ type: actionenum.logi_failure, payload: err.message });
        });
    } catch (error) {
      dispatch({ type: actionenum.logi_failure, payload: error.message });
      dispatch({
        type: actiontypes.show_alert,
        payload: "registration failure",
      });
    }
  };
};
export const login = (user) => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionenum.logi_request });
      await axiosinstance
        .post("/auth/login", user)
        .then((res) => {
          if (process.browser) {
            localStorage.setItem("token", JSON.stringify(res.data.token));
            localStorage.setItem("user", JSON.stringify(res.data.user));
          }
          dispatch({ type: actionenum.logi_success, payload: res.data ,message: "authenticating succes"});
        })
        .catch((err) => {
          dispatch({ type: actionenum.logi_failure, payload: err.message });
        });
    } catch (error) {
      dispatch({ type: actionenum.logi_failure, payload: error.message });
    }
  };
};
export const isUserlogin = () => {
  return async (dispatch) => {
    let user, token;
    if (process.browser) {
      user = JSON.parse(localStorage.getItem("user"));
      token = JSON.parse(localStorage.getItem("user"));
    }
    user &&  dispatch({ type: actionenum.logi_success, payload: { user, token } ,message:""})
  };
};
export const logout = () => {
  return async (dispatch) => {
    if(process.browser){
      localStorage.clear()
    }
    dispatch({type:actionenum.logi_failure,message:"logout success"})
  };
};

export const clearmessage = () => {
  return async (dispatch) => {
    dispatch({ type: actionenum.clear_message });
  };
};
