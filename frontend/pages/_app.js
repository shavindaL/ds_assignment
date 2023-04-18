import '@/styles/globals.css'
import { AuthContextProvider } from '@/context/AuthContext';
import Head from 'next/head';

export default function App({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>iHerb</title>
      </Head>

      <AuthContextProvider><Component {...pageProps} /></AuthContextProvider>
    </>
  )
}
