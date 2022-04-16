import Link from "next/link";
import useGuide from "../hooks/useGuide";
import { Container } from "../layouts/Layout";
export default function Home() {
  const comp = <Link href="/website">Let&apos;s make a website</Link>;
  const guide = "← click to register";
  const { compWithGuide } = useGuide({ comp, guide });
  const Contents = (
    <>
      <p>public:</p>
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
      <pre />
      <p>protected:</p>
      <p>{compWithGuide}</p>
      <p>
        <Link href="/movie-mate">Let&apos;s watch a movie with me</Link>
      </p>
    </>
  );
  return <Container contents={Contents} />;
}
