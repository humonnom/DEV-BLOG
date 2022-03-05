import Link from "next/link";
import { Container } from "../components/Comp";

export default function Detail() {
  const Contents = (
    <>
      <Link href="/">뒤로 가기</Link>
      <p className="kr">:: 박주은 ::</p>
      <p className="kr">요즘은 웹사이트를 만듭니다.</p>
      <p className="kr">(( juepark42@gmail.com ))</p>
    </>
  );
  return <Container contents={Contents} />;
}
