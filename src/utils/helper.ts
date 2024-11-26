type Params = {
    [key: string]: string | string[] | object;
  };
  
  export const serializeParams = (paramsObj: Params): string => {
    const params = new URLSearchParams();
  
    Object.entries(paramsObj).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item) => params.append(key, item));
      } else if (typeof value === "object" && value !== null) {
        params.append(key, JSON.stringify(value));
      } else if (value) {
        params.append(key, value as string);
      }
    });
    return params.toString();
  };
  