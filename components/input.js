import React, { useMemo, useState } from "react";
import { css } from "@emotion/react";

export const useInput = ({ type, textarea }) => {
  const [value, setValue] = useState("");

  const onChange = (event) => setValue(event.currentTarget.value);
  const id = useMemo(() => Math.random(), []);
  const comp = useMemo(() => {
    return (<>
      {!textarea && (<input id={id} type={type} value={value} onChange={onChange} />)}
      {textarea && (<textarea css={TextareaStyle} id={id} type={type} value={value} onChange={onChange} />)}
    </>)
  }, [id, type, value, textarea]);

  return {
    value,
    comp,
    id
  };
};

const TextareaStyle = css`
  height: 200px;
`;