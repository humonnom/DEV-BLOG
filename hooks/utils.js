import { useEffect, useMemo, useState } from "react";
import { css } from "@emotion/react";
import { BORDER_STYLE, COLOR_STYLE } from "../styles/global";

export const useGetView = () => {
  const [width, setWidth] = useState(800);

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

export const getRandom = (min, max) => {
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

export const getRandomBorderRadius = () => {
  const left = getRandom(40, 150);
  const right = getRandom(40, 150);
  const top = getRandom(40, 150);
  const bottom = getRandom(40, 150);
  return css`
    border-radius: ${top}px ${right}px ${bottom}px ${left}px;
  `;
};

export const getButtonsList = (usage) => {
  if (usage === "movieMateTemplate") {
    return [
      { href: "/movie-mate", label: "( back )" },
      { href: "#movie", label: "Available Movies" },
      { href: "#appointment", label: "Confirmed Appointment" },
      { href: "#log", label: "Log" },
    ];
  } else if (usage === "movieMate") {
    return [
      { href: "/", label: "HOME" },
      { href: "/movie-mate", label: "user list" },
      { href: "/movie-mate/admin", label: "staff only" },
    ];
  }
};

export const getNavDesc = (usage) => {
  if (usage === "movieMateTemplate") {
    return "hello !";
  } else if (usage === "movieMate") {
    return "mm";
  } else if (usage === "website") {
    return "website";
  }
  return "?????? ???????????? ??????";
};

export const getAlphabets = () => {
  return "abcdefghijklmnopqrstuvwxyz".split("");
};

export const isAlpha = (target) => {
  const alphabets = getAlphabets();
  if (alphabets.includes(target)) {
    return true;
  } else {
    return false;
  }
};

export const isOutOfDate = (date) => {
  const today = new Date();
  const target = new Date(date);
  return today > target;
};

export const slugify = (str) => {
  return str
  .toLowerCase()
  .trim()
  .replace(/[^\w\s-]/g, '')
  .replace(/[\s_-]+/g, '-')
  .replace(/^-+|-+$/g, '');
}

export const arrayfy = (str) => {
  const array = str
  .toLowerCase()
  .replace(/\s/g, '')
  .trim()
  .split(','); 
  return array;
}

export const getTags = () => {
  return ["js", "onit"];
}