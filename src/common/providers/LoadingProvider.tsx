import React from 'react';

export type LoadingContextType = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  nextPage: string;
  setNextPage: React.Dispatch<React.SetStateAction<string>>;
};

const LoadingContext = React.createContext<LoadingContextType>({} as LoadingContextType);

const LoadingContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [nextPage, setNextPage] = React.useState<string>('#');

  return (
    <LoadingContext.Provider value={{ loading, setLoading, nextPage, setNextPage }}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingContext;
export { LoadingContextProvider };
