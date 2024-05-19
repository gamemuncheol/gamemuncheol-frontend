'use client';

import api from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import { IsAgreeType } from '@/types/member-type';

export const useMemberQueries = () => {
  const { data: isAgreed, isLoading: isAgreedLoading } = useQuery<IsAgreeType>({
    queryKey: ['isAgree'],

    queryFn: async () => {
      const { data } = await api('/privacy/is-agreed');
      console.log('data:', data?.data?.data);
      return data?.data?.data;
    },
  });

  return { isAgreed, isAgreedLoading };
};
