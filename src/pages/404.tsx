import { NextPage } from 'next';
import React from 'react';
import { useRouter } from 'next/router';

const Page404: NextPage = () => {
  const router = useRouter();

  React.useEffect(() => {
    router.push('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default Page404;
