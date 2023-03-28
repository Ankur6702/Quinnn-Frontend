import React from "react";
import GenericError from "../error-handlers/GenericError";

import GenericListSkeleton from "./GenericListSkeleton";

const GenericResponseHandler = ({
  status,
  skeleton = <GenericListSkeleton items={3} />,
  children,
  errorPlaceholder,
  error,
}) => {
  switch (status) {
    case "idle":
      return <></>;
    case "pending":
      return skeleton;
    case "rejected":
      return errorPlaceholder || <GenericError />;
    case "resolved":
      return <>{children}</>;
    default:
      throw new Error(`${status} is an invalid status.`);
  }
};

export default GenericResponseHandler;
