import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Detail.module.css";

export default function Detail() {
  return (
    <div className={styles.container}>
      <Head>
        <title>fff</title>
        <meta name="program detail" content="create your own website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Link href="/">뒤로 가기</Link>
        <p className="kr">html, css, js를 익히기</p>
        <p className="kr">배운것을 적용하여 사이트 만들기</p>
        <p className="kr">사이트를 유지하는 법 알기</p>
      </main>
    </div>
  );
}
