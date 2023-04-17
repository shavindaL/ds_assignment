import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>


        <title>iHerb</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />

        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tw-elements@1.0.0-beta1/dist/css/index.min.css"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
        <script src="https://cdn.jsdelivr.net/npm/tw-elements@1.0.0-beta1/dist/js/index.min.js" />
      </body>
    </Html>
  );
}
