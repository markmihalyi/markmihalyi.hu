import 'styles/globals.css';

import type { AppType } from 'next/dist/shared/lib/utils';
import Head from 'next/head';
import Image from 'next/image';
import { LoadingContextProvider } from 'common/providers/LoadingProvider';
import Navbar from 'components/Navbar';
import React from 'react';

const App: AppType = ({ Component, pageProps }) => {
  const [loading, setLoading] = React.useState<boolean>(true);

  return (
    <LoadingContextProvider>
      <Head>
        <title>Márk Mihályi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="fixed z-[-1] h-screen w-screen">
        <Image
          src="/background.png"
          alt="Háttérkép"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          unoptimized
          priority={true}
          draggable={false}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      {loading ? null : (
        <>
          <Navbar />
          <Component {...pageProps} />
        </>
      )}
    </LoadingContextProvider>
  );
};

export default App;
