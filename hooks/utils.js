import { useEffect, useMemo, useState } from "react";
import { css } from "@emotion/react";
import { BORDER_STYLE, COLOR_STYLE } from "../styles/global";

export const useGetView = () => {
  const [width, setWidth] = useState(0);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = useMemo(() => {
    return width <= 768;
  }, [width]);
  return { isMobile };
};

export const useGetRamdom = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getColor = (white) => {
  if (white === true) {
    return css`
      color: ${COLOR_STYLE.white};
    `;
  } else {
    return css`
      color: ${COLOR_STYLE.black};
    `;
  }
};
export const getBorder = (white) => {
  if (white === true) {
    return css`
      border: ${BORDER_STYLE.white};
    `;
  } else {
    return css`
      border: ${BORDER_STYLE.black};
    `;
  }
};
export const getBackground = (white) => {
  if (white === true) {
    return css`
      background-color: ${COLOR_STYLE.black};
    `;
  } else {
    return css`
      background-color: ${COLOR_STYLE.white};
    `;
  }
};

export const useGetBorderRadius = () => {
  const left = useGetRamdom(40, 150);
  const right = useGetRamdom(40, 150);
  const top = useGetRamdom(40, 150);
  const bottom = useGetRamdom(40, 150);
  return css`
    border-radius: ${top}px ${right}px ${bottom}px ${left}px;
  `;
};
