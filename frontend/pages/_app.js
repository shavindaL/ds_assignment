import '@/styles/globals.css'
import { AuthContextProvider } from '@/context/AuthContext';
import Head from 'next/head';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

export default function App({ Component, pageProps }) {
  const initialOptions = {
    "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
    currency: "USD",
    intent: "capture",
    "data-client-token": "abc123xyz==",
  };

  return (
    <>
      <Head>
        <title>AyuCare</title>
      </Head>

      <AuthContextProvider>
        <PayPalScriptProvider options={{ "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,currency:"JPY" }}>
          <Component {...pageProps} />
        </PayPalScriptProvider>
      </AuthContextProvider >
    </>
  )
}
