import { useReducer, useCallback } from "react";
import axios from "../axios-lab";
import { useIsMounted } from "./isMounted";

const initialState = {
  loading: false,
  error: null,
  data: null,
  extra: null,
  identifier: null,
};

const httpReducer = (curHttpState, action) => {
  switch (action.type) {
    case "SEND":
      return {
        loading: true,
        error: null,
        data: null,
        extra: null,
        identifier: action.identifier,
      };
    case "RESPONSE":
      return {
        ...curHttpState,
        loading: false,
        data: action.responseData,
        extra: action.extra,
      };
    case "ERROR":
      return { loading: false, error: action.error };
    case "CLEAR":
      return initialState;
    default:
      throw new Error("should not be reached!~");
  }
};

const useHttp = () => {
  const [httpState, dispatchHttp] = useReducer(httpReducer, {
    loading: false,
    error: null,
    data: null,
    extra: null,
    identifier: null,
  });
  const isMounted = useIsMounted();

  const clear = useCallback(() => {
    dispatchHttp({ type: "CLEAR" });
  }, []);

  const sendRequest = useCallback(
    async (url, method, data = null, reqExtra, identifier) => {
      dispatchHttp({ type: "SEND", identifier: identifier });
      try {
        const responseData = await axios({ method, url, data });
        if (isMounted.current)
          dispatchHttp({
            type: "RESPONSE",
            responseData,
            extra: reqExtra,
          });
      } catch (err) {
        if (err && !err.response)
          dispatchHttp({ type: "ERROR", error: err.message });
        if (err.response)
          dispatchHttp({ type: "ERROR", error: err.response.data.message });
        dispatchHttp({ type: "CLEAR" });
      }
    },
    [isMounted]
  );

  return {
    isLoading: httpState.loading,
    resData: httpState.data,
    error: httpState.error,
    sendRequest: sendRequest,
    reqExtra: httpState.extra,
    reqId: httpState.identifier,
    clear: clear,
  };
};

export default useHttp;
