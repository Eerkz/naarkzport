import "../styles/globals.css";
import "../styles/animation.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Naarkz.dev</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
