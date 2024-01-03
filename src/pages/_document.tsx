import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html className="dark">
      <Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Head>
    </Html>
  );
};

export default Document;
