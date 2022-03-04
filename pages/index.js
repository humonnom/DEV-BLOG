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
        <title>Document Studio</title>
        <meta name="examples" content="website examples" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <p className="kr">`Document Studio`</p>
        {/* <a href="https://www.dgf5.com">https://www.dgf5.com</a> */}
        {/* <p className="kr"> :: see the detail :: </p> */}
        <p className="kr">`abcdigital`</p>
        <Link href="/wordle">wordle</Link>
      </main>

      <footer className={styles.footer}>2022@ copyright fff-studio</footer>
    </div>
  );
}
