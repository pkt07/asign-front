import { commonCall } from "./apiUtils";

import { API_URL } from "../Utility/apiConstant";
export const commonApi = async(query: any) => {
  let callingUrl = API_URL["common_url"] + query.endPoint;
  let result = await commonCall(query.method, callingUrl, query);
  return result;
};