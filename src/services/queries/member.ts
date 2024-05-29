'use client';

import api from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import { memberKeys } from '../queryKeys';

const memberService = {
  getIsAgree: async () => {
    const response = await api.get('privacy');
    return response.data.data;
  },
  getCheckNickname: async (name: string) => {
    const response = await api.get(`/api/member/nickname/${name}`);
    return response.data.data;
  },
};

const memberQueryOptions = {
  isagree: (isLoggined: boolean) => ({
    queryKey: memberKeys.agree,
    queryFn: () => memberService.getIsAgree(),
    enabled: isLoggined,
  }),

  checkNickname: (name: string, isEnabled: boolean) => ({
    queryKey: memberKeys.nickname(name),
    queryFn: () => memberService.getCheckNickname(name),
    enabled: isEnabled,
  }),
};

export function useIsAgree(isLoggined: boolean) {
  return useQuery(memberQueryOptions.isagree(isLoggined));
}
export function useNameCheck(name: string, isEnabled: boolean) {
  return useQuery(memberQueryOptions.checkNickname(name, isEnabled));
}
