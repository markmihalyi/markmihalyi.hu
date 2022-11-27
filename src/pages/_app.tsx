import 'styles/globals.css';

import type { AppType } from 'next/dist/shared/lib/utils';
import Head from 'next/head';
import { LoadingContextProvider } from '../common/providers/LoadingProvider';
import Navbar from '../components/Navbar';
import React from 'react';

const App: AppType = ({ Component, pageProps }) => {
  return (
    <LoadingContextProvider>
      <Head>
        <title>Márk Mihályi | FullStack Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </LoadingContextProvider>
  );
};

export default App;
