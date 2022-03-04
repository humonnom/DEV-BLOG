import { useEffect, useMemo, useState } from "react";
import { Container } from "../components/Comp";
import { DesktopForm } from "../components/util";

function useCheck() {
  const [isSuccess, setIsSuccess] = useState(null);
  const [value, setValue] = useState("");
  const [color, setColor] = useState(null);

  const column = useMemo(() => {
    if (value && color) {
      return [
        { value: "안", color: "yellow" },
        { value: "녕", color: "yellow" },
        { value: "하", color: "yellow" },
        { value: "세", color: "yellow" },
        { value: "요", color: "yellow" },
      ];
    }
    return null;
  }, [color, value]);

  const check = (value, dest, parse) => {
    setValue(value);
    setColor([1, 1, 1, 1, 1]);
    setIsSuccess(true);
  };

  return {
    check,
    isSuccess,
    column,
  };
}

export default function Wordle() {
  const dest = "안녕하세요";
  const parsed = "ㅇㄴㅎㅅㅇ";
  const { column, check, isSuccess } = useCheck();
  const [list, setList] = useState(null);

  const onSubmit = (event) => {
    event.preventDefault();
    check(value, dest, parsed);
  };

  useEffect(() => {
    if (column) {
      if (list === null) {
        console.log("empty");
        setList([column]);
      } else if (Array.isArray(list)) {
        console.log("no empty");
        setList(list.push(column));
      }
      console.log("list: ");
      console.log(list);
    }
  }, [list, column]);

  const { value, comp } = DesktopForm({
    onSubmit,
  });

  const Contents = (
    <>
      <p>한글 초성 워들</p>
      <p>your input: {value}</p>
      <p>list:</p>
      {comp}
      {isSuccess && <div>correct!</div>}
    </>
  );
  return <Container contents={Contents} />;
}
