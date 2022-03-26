import Link from "next/link";
import { Container } from "../layouts/Layout";
export default function Home() {
  const Contents = (
    <>
      <p className="kr">Hello</p>
      <p>
        <Link href="/blog">BLOG</Link>
      </p>
      <p>
        <Link href="/projects">PROJECTS</Link>
      </p>
      <p>
        <Link href="/contact">CONTACT</Link>
      </p>
      <p>
        <Link href="/about">ABOUT THIS SITE</Link>
      </p>
    </>
  );
  return <Container contents={Contents} />;
}
