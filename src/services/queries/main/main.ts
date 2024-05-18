'use client';

import api from '@/services/api';
import { MainListType } from '@/types/main-type';
import { useQuery } from '@tanstack/react-query';

export const useMainQueries = () => {
  const { data: mainListData, isLoading: mainListLoading } = useQuery<
    MainListType[]
  >({
    queryKey: ['key'],

    queryFn: async () => {
      const { data } = await api('/post/page/new');
      return data?.data?.data;
    },
  });

  return { mainListData, mainListLoading };
};
