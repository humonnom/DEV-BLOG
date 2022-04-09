import React, { useCallback, useMemo, useState } from "react";
import { css } from "@emotion/react";

export const useInput = ({ type }) => {
  const [value, setValue] = useState("");

  const onChange = (event) => setValue(event.currentTarget.value);

  const comp = useMemo(() => {
    return (
      <input css={InputStyle} type={type} value={value} onChange={onChange} />
    );
  }, [type, value]);

  return {
    value,
    comp,
  };
};

const InputStyle = css``;
