import Link from "next/link";
import useGuide from "../hooks/useGuide";
import { Container } from "../layouts/Layout";
export default function Home() {
  const comp = <Link href="/about">WEBSITE</Link>;
  const guide = "← click to register";
  const { compWithGuide } = useGuide({ comp, guide });
  const Contents = (
    <>
      <p>
        <Link href="/blog">BLOG</Link>
      </p>
      <p>
        <Link href="/projects">PROJECTS</Link>
      </p>
      <p>
        <Link href="/contact">CONTACT</Link>
      </p>
      <p>{compWithGuide}</p>
      <p>
        <Link href="/about">ABOUT THIS SITE</Link>
      </p>
    </>
  );
  return <Container contents={Contents} />;
}
