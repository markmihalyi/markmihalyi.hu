import NextHead from 'next/head';
import React from 'react';

const Head: React.FC = () => {
  return (
    <NextHead>
      <meta charSet="utf-8" />
      <meta name="description" content="Márk Mihályi's personal website" />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};

export default Head;
