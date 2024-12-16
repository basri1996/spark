import { api } from "../config/api";

type Params = {
    [key: string]: any ;
  };

  export const serializeParams = (paramsObj:Params ): string => {
    const params = new URLSearchParams();
  
    Object.entries(paramsObj).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item) => params.append(key, item));
      } else if (typeof value === "object" && value !== null) {
        params.append(key, JSON.stringify(value));
      } else if (value) {
        params.append(key, String(value) as string);
      }
    });
    return params.toString();
  };

  export const refreshToken =(e:any)=>{
    api.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${e.token!}`
  }
  