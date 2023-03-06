import { useState, useEffect, useCallback } from "react";

const useAsync = (initialState) => {
  const [data, setData] = useState(initialState || null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("idle");

  const run = useCallback(
    (promise) => {
      if (!promise || !promise.then) {
        throw new Error(
          `The argument passed to useAsync().run must be a promise. Maybe a function that's passed isn't returning anything?`
        );
      }
      setStatus("pending");
      return promise
        .then((response) => {
          const { data } = response;
          setData(data);
          setStatus("resolved");
          return response;
        })
        .catch((error) => {
          setError(error);
          setStatus("rejected");
          return Promise.reject(error);
        });
    },
    [setData, setError]
  );

  const reset = () => {
    setData(initialState || null);
    setError(null);
    setStatus("idle");
  };

  useEffect(() => {
    return () => {
      reset();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isIdle: status === "idle",
    isLoading: status === "pending",
    isError: status === "rejected",
    isSuccess: status === "resolved",
    data,
    error,
    status,
    run,
    setData,
    reset,
  };
};

export default useAsync;
