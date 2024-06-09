'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

type ReactQueryProviderType = {
  children: React.ReactNode;
};

const ReactQueryProvider = ({ children }: ReactQueryProviderType) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // SSR에서는 클라이언트에서 즉시 재요청하는 것을 피하기 위해,
            // default staleTime을 0보다 높게 설정하는 것이 일반적
            staleTime: 60 * 1000,
          },
        },
      }),
  );

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default ReactQueryProvider;
