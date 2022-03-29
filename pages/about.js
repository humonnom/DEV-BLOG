import { TextBox } from "../components/contents";
import { BlackPebble, WhitePebble } from "../components/pebble";
import { Title } from "../components/title";
import { Container } from "../layouts/Layout";
export default function About() {
  const Contents = (
    <>
      <p className="kr">About</p>
      <div>
        <p>:: pebble</p>
        <WhitePebble inside="this is white pebble" />
        <WhitePebble inside="short one" />
        <BlackPebble inside="normal black pebble" />
        <BlackPebble
          inside="i have action"
          action={() => alert("you clicked black pebble x)")}
        />
        <p>:: title</p>
        <Title inside="Hello" />
        <Title inside="this is covered type" hasBorder={true} />
        <p>:: textbox</p>
        <TextBox
          widthType="wide"
          inside="원숭이 엉덩이는 빨게/ 빨가면 사과/ 사과는 맛있어/ 맛있으면 바나나/ 바나나는 길어/ 길으면 기차/ 기차는 빨라/ 빠르면 비행기/ 비행기는 높아"
        />
        <pre></pre>
        <TextBox
          ascii={true}
          inside="+----+     +----+     +----+     
|  🐒   | => | ❤️   | => |  🍎   |
+----+     +----+     +----+    "
        />
      </div>
    </>
  );
  return <Container contents={Contents} />;
}
