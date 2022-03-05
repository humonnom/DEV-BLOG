import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import cookie from "../asset/cookie.jpeg";
import { Container } from "../components/Comp";

export default function Instagram() {
  const Contents = (
    <>
      <Link href="/">뒤로 가기</Link>
      <p className="kr">instagram</p>
      <Image src={cookie} alt="jueun" />;
    </>
  );
  return <Container contents={Contents} />;
}
