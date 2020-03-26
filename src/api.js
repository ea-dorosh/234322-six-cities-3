import axios from "axios";
import {onError, onUnauthorized} from "./index";

const ApiSettings = {
  URL: `https://htmlacademy-react-3.appspot.com/six-cities`,
  TIMEOUT: 5000,
  ERROR: {
    UNAUTHORIZED: 401,
  },
};


export const createAPI = () => {
  const api = axios.create({
    baseURL: ApiSettings.URL,
    timeout: ApiSettings.TIMEOUT,
    withCredentials: true
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const {response} = err;

    if (response.status === ApiSettings.ERROR.UNAUTHORIZED) {
      onUnauthorized();

      throw err;
    }

    onError(response);
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
