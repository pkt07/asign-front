import * as types from "./actionTypes";
import { commonApi } from "../../Services/GlobalApis";
import {checkResponse} from "../../Services/apiUtils"
export const loginCheck = (actionData: boolean) => ({
  type: types.LOGGEDIN,
  actionData,
});
export const Register = (userData: any) => {
    return async(dispatch: any) => {
      // dispatch(userReg(userData));
      const A = await commonApi(userData);
      dispatch(checkResponse(A));
    };
  };