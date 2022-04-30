import React, { useMemo, useState } from "react";
import { css } from "@emotion/react";

export const useInput = ({ type }) => {
  const [value, setValue] = useState("");

  const onChange = (event) => setValue(event.currentTarget.value);
  const id = useMemo(() => Math.random(), []);
  const comp = useMemo(() => {
    return (
      <input css={InputStyle} id={id} type={type} value={value} onChange={onChange} />
    );
  }, [type, value, id]);

  return {
    value,
    comp,
    id
  };
};

const InputStyle = css`
  height: 
`;
