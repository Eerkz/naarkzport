import "../styles/globals.css";
import "../styles/animation.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "../store/ThemeContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>sampleonly.dev</title>
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
