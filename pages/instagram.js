import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import cookie from "../asset/cookie.jpeg";

// header components화하기
// 뒤로가기 버튼 컴포넌트화하기

export default function Instagram() {
  return (
    <div className={styles.container}>
      <Head>
        <title>fff</title>
        <meta name="program detail" content="create your own website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Link href="/">뒤로 가기</Link>
        <p className="kr">instagram</p>
        <Image src={cookie} alt="jueun" />;
      </main>
    </div>
  );
}
