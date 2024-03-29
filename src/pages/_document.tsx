/* eslint-disable react/no-unknown-property */

import { Head, Html, Main, NextScript } from 'next/document';

import React from 'react';

const Document = () => {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="I am a self-taught FullStack Engineer passionate about IT, especially web development."
        />
        <meta name="robots" content="all" />
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;700&family=Fira+Code:wght@300;400;500;700&family=JetBrains+Mono:wght@500&family=Poppins:wght@400;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;700&family=Fira+Code:wght@300;400;500;700&family=JetBrains+Mono:wght@500&family=Poppins:wght@400;700&display=swap"
          media="print"
          onLoad={(e) => {
            e.currentTarget.media = 'all';
          }}
        />
      </Head>
      <body className="m-auto max-w-[1920px]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
