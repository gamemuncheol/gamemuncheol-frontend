'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

type TanStackQueryProviderType = {
  children: React.ReactNode;
};

export default function TanStackQueryProvider(
  props: TanStackQueryProviderType,
) {
  const { children } = props;

  const [queryClient] = React.useState(() => new QueryClient({}));

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
