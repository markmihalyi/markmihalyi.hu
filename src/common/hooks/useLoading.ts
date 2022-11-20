import LoadingContext, { LoadingContextType } from 'common/providers/LoadingProvider';

import React from 'react';

const useLoading = () => {
  const { loading, setLoading, nextPage, setNextPage } =
    React.useContext<LoadingContextType>(LoadingContext);
  return { loading, setLoading, nextPage, setNextPage };
};

export default useLoading;
