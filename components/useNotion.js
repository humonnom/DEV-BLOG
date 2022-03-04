import React, { useEffect } from "react";
import { useGetPage } from "../api/notion";

function useNotion() {
  const { res } = useGetPage();
  console.log("??????????");
  useEffect(() => {
    if (res) {
      console.log(res);
    } else {
      console.log("res is null");
    }
  }, [res]);
  return <div>js</div>;
}

export default useNotion;
