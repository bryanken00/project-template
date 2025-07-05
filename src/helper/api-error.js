import { useContext, useCallback } from "react";
import { MessageContext } from "./message-context";

export const useErrorDisplay = () => {
  const messageApi = useContext(MessageContext);

  return useCallback(
    ({ error }) => {
      messageApi.open({
        type: "error",
        content:
          error?.response?.data?.message ||
          "Oops! Something went wrong. Please try again later, or contact support for assistance.",
      });
    },
    [messageApi]
  );
};
