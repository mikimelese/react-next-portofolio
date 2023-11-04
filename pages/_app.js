import '@/styles/globals.css'
import '../styles/Card.css'
import { DarkModeProvider } from '../contexts/DarkModeContext';
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return <DarkModeProvider>
    <Head>
      <title>portofolio</title>
      <meta name="description" content="Generated by mikyas" />
      <link rel="icon" href="/icon2.png" />
    </Head>
    <Component {...pageProps} />
  </DarkModeProvider>
}
