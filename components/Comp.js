import Head from "next/head";
import styles from "../styles/Home.module.css";

export const HeadConf = () => {
  return (
    <Head>
      <title>Document Studio</title>
      <meta name="examples" content="website examples" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export const Footer = () => {
  return <footer className={styles.footer}>footer</footer>;
};

export const Container = ({ contents }) => {
  return (
    <div className={styles.container}>
      <HeadConf />
      <main className={styles.main}>{contents}</main>
      <Footer />
    </div>
  );
};
