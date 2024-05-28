'use client';

import api from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import { IsAgreeType } from '@/types/member-type';
import useLoginStore from '@/store/useMemberStore';
import { memberKeys } from '../queryKeys';

export const useMemberQueries = () => {
  const isLoggined = useLoginStore((state) => state.isLoggined);

  const { data: isAgreed, isLoading: isAgreedLoading } = useQuery<IsAgreeType>({
    queryKey: [memberKeys.isagree],

    queryFn: async () => {
      const { data } = await api('/privacy');
      console.log('is-agree:', data.data);
      return data.data;
    },
    // 로그인 상태가 true일 때만 쿼리 활성화
    enabled: isLoggined,
  });
  return { isAgreed, isAgreedLoading };
};
