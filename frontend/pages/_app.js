import '@/styles/globals.css'
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {

  useEffect(() => {
    const use = async () => {
      (await import('tw-elements')).default;
    };
    use();
  }, []);

  return <Component {...pageProps} />
}
