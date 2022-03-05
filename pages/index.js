import Link from "next/link";
import { Container } from "../components/Comp";
export default function Home() {
  const Contents = (
    <>
      {/* <p className="kr">`Document Studio`</p> */}
      {/* <a href="https://www.dgf5.com">https://www.dgf5.com</a> */}
      {/* <p className="kr"> :: see the detail :: </p> */}
      <p className="kr">`A-B-C-Digital`</p>
      <div>
        <Link href="/poodle">POODLE</Link>
      </div>
    </>
  );
  return <Container contents={Contents} />;
}
