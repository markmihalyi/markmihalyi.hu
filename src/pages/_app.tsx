import 'styles/globals.css';

import type { AppType } from 'next/dist/shared/lib/utils';
import Head from './_head';
import Navbar from 'components/Navbar';

const App: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default App;
