import { ImageBox, TextBox } from "../components/contents";
import { Guide } from "../components/guide";
import { BlackPebble, WhitePebble } from "../components/pebble";
import { Title } from "../components/title";
import { Container } from "../layouts/Layout";
import useMouse from "@react-hook/mouse-position";
import React from "react";

export default function About() {
  const ref = React.useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  const Contents = (
    <>
      <p className="kr">About</p>
      <div ref={ref}>
        <p>:: pebble</p>
        <WhitePebble inside="this is white pebble" />
        <WhitePebble inside="short one" />
        <BlackPebble inside="normal black pebble" />
        <BlackPebble
          inside="i have action"
          action={() => alert("you clicked black pebble x)")}
        />
        <p>:: guide</p>
        <Guide inside="guide message" />
        <p>:: title</p>
        <Title inside="Hello" />
        <Title inside="this is covered type" hasBorder={true} />
        <p>:: textbox</p>
        <TextBox
          widthType="wide"
          inside="
          원숭이 엉덩이는 빨~개/ 빨가면 사과/ 사과는 맛있어/ 맛있으면 바나나/ 바나나는 길어/ 길면 기차/ 기차는 빨라/ 빠르면 비행기/ 비행기는 높아 /높으면 백두산"
        />
        <pre></pre>
        <TextBox
          ascii={true}
          inside="+----+     +----+     +----+     
|  🐒   | => | ❤️   | => |  🍎   |
+----+     +----+     +----+    "
        />
        <p>:: image</p>
        <ImageBox />
        x: ${mouse.x}
        y: ${mouse.y}
      </div>
    </>
  );
  return <Container contents={Contents} />;
}
