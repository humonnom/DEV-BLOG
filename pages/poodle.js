import { useEffect, useMemo, useState } from "react";
import { Container } from "../components/Comp";
import { DesktopForm } from "../components/util";
import styles from "../styles/Poodle.module.css";

function useCheck() {
  const [isSuccess, setIsSuccess] = useState(null);
  const [value, setValue] = useState("");
  const [color, setColor] = useState(null);

  const column = useMemo(() => {
    if (value && color) {
      return [
        { value: "안", color: "yellow", row: 0, col: 0 },
        { value: "녕", color: "yellow", row: 1, col: 0 },
        { value: "하", color: "yellow", row: 2, col: 0 },
        { value: "세", color: "yellow", row: 3, col: 0 },
        { value: "요", color: "yellow", row: 4, col: 0 },
      ];
    }
    return null;
  }, [color, value]);

  const check = (value, dest, parse) => {
    setValue(value);
    setColor([1, 1, 1, 1, 1]);
    setIsSuccess(false);
  };

  return {
    check,
    isSuccess,
    column,
  };
}

function useGetBoard({ list }) {
  const board = useMemo(
    () =>
      list.map((item, index) => (
        <li key={index} className={styles.block}>
          {item.value}
        </li>
      )),
    [list]
  );

  return {
    board,
  };
}

export default function Poodle() {
  const dest = "안녕하세요";
  const parsed = "ㅇㄴㅎㅅㅇ";
  const { column, check, isSuccess } = useCheck();
  const [list, setList] = useState([]);
  const { board } = useGetBoard({ list });

  const onSubmit = (event) => {
    event.preventDefault();
    check(value, dest, parsed);
  };

  useEffect(() => {
    if (column) {
      setList(list.concat(column));
    }
  }, [column, setList]);

  useEffect(() => {
    if (list) {
      console.log(list);
    }
  }, [list]);

  const { value, comp } = DesktopForm({
    onSubmit,
  });

  const Contents = (
    <>
      <h2 className={styles.title}>푸들 🐩</h2>
      <p className={styles.desc}>한국어 초성 워들 </p>
      <div className={styles.buttons}>
        <button>🔗&nbsp;&nbsp;결과 공유하기</button>
        <button type="button" onClick={() => window.location.assign("/poodle")}>
          🤟&nbsp;&nbsp;한판 더!
        </button>
      </div>
      <div className={styles.board}>{board}</div>
      {!isSuccess && comp}
      {isSuccess && <div>correct!</div>}
    </>
  );
  return <Container contents={Contents} />;
}
