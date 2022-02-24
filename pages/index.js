import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
{
  /* <a href="/">abcdigital.site</a> */
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>fff</title>
        <meta name="examples" content="website examples" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <p className="kr">나만의 사이트를 만들고 싶나요?</p>
        <a href="https://www.dgf5.com">https://www.dgf5.com</a>
        <a href="https://www.dgf5.com">https://www.dgf5.com</a>
        <a href="https://www.dgf5.com">https://www.dgf5.com</a>
        <a href="https://www.dgf5.com">https://www.dgf5.com</a>
        <a href="https://www.dgf5.com">https://www.dgf5.com</a>
        <p className="kr">무료로 진행되는 프로그램에서</p>
        <p className="kr">위와 같은 사이트를 직접 만들어 볼 수 있습니다. </p>
        <Link href="/detail">프로그램 설명 더보기</Link>
      </main>

      <footer className={styles.footer}>2022@ copyright fff-studio</footer>
    </div>
  );
}
