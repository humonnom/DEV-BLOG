import { useMemo, useState } from "react";
import styles from "../styles/Poodle.module.css";

export function isKorean(value) {
  return !value.match(/[^a-zA-Z0-9\p{Hangul}]/);
}

export function DesktopForm({ onSubmit }) {
  const [value, setValue] = useState("");

  const onChange = (event) => setValue(event.currentTarget.value);

  const message = useMemo(() => {
    console.log(value);
    if (value.length > 0 && isKorean(value)) {
      console.log("한국어가 아님");
      return "Warning! 한글로 써주세요.";
    } else if (value.length < 5) {
      return "Hint! 정답은 다섯 글자에요.";
    } else if (value.length === 5) {
      return "맞았는지 볼까요?";
    }
    return "";
  }, [value]);

  const form = useMemo(() => {
    return (
      <>
        <label htmlFor="value">
          <input
            type="text"
            id="value"
            name="input"
            value={value}
            onChange={onChange}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                onSubmit();
              }
            }}
            maxLength={5}
          />
        </label>
        <p className={styles.hint}>{message}</p>
        <button type="button" onClick={onSubmit}>
          제출
        </button>
      </>
    );
  }, [value, message, onSubmit]);

  return { value, comp: form };
}
