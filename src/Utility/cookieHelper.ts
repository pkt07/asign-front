import cookie from "js-cookie";
export const setCookie = (key:string, value:any) => {
      cookie.set(key, value, {
        expires: value.expires,
        path: "/",
      });
}

export const getCookie = (key:string) => {
    return cookie.get(key);
  };

  export const removeCookie = (key:string) => {
      cookie.remove(key)
  };