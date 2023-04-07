import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default function () {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = router.query;

  return <div></div>;
}
