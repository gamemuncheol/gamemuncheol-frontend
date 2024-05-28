'use client';

import api from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import { IsAgreeType } from '@/types/member-type';
import useLoginStore from '@/store/useMemberStore';
import { memberKeys } from '../queryKeys';

const getIsAgree = async () => {
  const response = await api.get('privacy');
  return response.data.data;
};
const getCheckNickname = async (name: string) => {
  const response = await api.get(`/api/member/nickname/${name}`);
  console.log('get check nickname:', name, response.data.data);
  return response.data.data;
};

export const useMemberQueries = () => {
  const isLoggined = useLoginStore((state) => state.isLoggined);

  const { data: isAgreed, isLoading: isAgreedLoading } = useQuery<IsAgreeType>({
    queryKey: [memberKeys.isagree],

    queryFn: getIsAgree,
    enabled: isLoggined, // 로그인 상태가 true일 때만 쿼리 활성화
  });

  return { isAgreed, isAgreedLoading };
};

export const useNameCheck = (name: string, isEnabled: boolean) => {
  return useQuery({
    queryKey: ['checkName', name],
    queryFn: () => getCheckNickname(name),
    enabled: isEnabled,
  });
};
