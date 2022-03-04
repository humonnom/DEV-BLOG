import { useMemo, useState } from "react";

export function DesktopForm({ onSubmit }) {
  const [value, setValue] = useState("");

  const onChange = (event) => setValue(event.currentTarget.value);

  const message = useMemo(() => {
    console.log(value);
    if (value.length > 5) {
      return "다섯 글자가 넘었어요";
    } else if (value.length < 5) {
      return "아직 칸이 남았어요";
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
          />
        </label>
        <p>{message}</p>
        <button type="button" onClick={onSubmit}>
          제출
        </button>
      </>
    );
  }, [value, message, onSubmit]);

  return { value, comp: form };
}
