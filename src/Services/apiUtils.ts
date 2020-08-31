import axios from 'axios';
// import {setCookie} from '../Utility/cookieHelper';
import { loginCheck } from "../Redux/Action/commonAction";
export const commonCall = async (method: any, url: string, body: any, headers?: any) => {
    const result = axios(url, {
    method: method,
    headers: headers || {},
    data: JSON.stringify(body),
  })
    .then((response) => {
      return response;
    })
    .catch(function (error) {
      if (error.response) {
        return error.response.data;
      }
    })
  return result;
};
export const checkResponse = (data: any) => {
    return async (dispatch: any) => {
      if (data.status === 200) {
        dispatch(loginCheck(true));
      }
      else {
        dispatch(loginCheck(false));
      }
    }
  }