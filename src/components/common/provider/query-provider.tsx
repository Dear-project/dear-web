"use client";

import { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider as DeerQueryClientProvider } from "react-query";
import GlobalStyle from "src/styles/global";

interface Props {
  children: ReactNode;
}

const QueryClientProvider = ({ children }: Props) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 0,
          },
        },
      }),
  );

  return (
    <DeerQueryClientProvider client={queryClient}>
      <GlobalStyle />
      {children}
    </DeerQueryClientProvider>
  );
};

export default QueryClientProvider;
