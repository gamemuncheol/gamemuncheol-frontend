'use client';

import api from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import { memberKeys } from '../queryKeys';

const memberService = {
  getCheckNickname: async (name: string) => {
    const response = await api.get(`/api/members/nickname/${name}`);
    return response.data.data;
  },
};

const memberQueryOptions = {
  checkNickname: (name: string, isEnabled: boolean) => ({
    queryKey: memberKeys.nickname(name),
    queryFn: () => memberService.getCheckNickname(name),
    enabled: isEnabled,
  }),
};

export function useNameCheck(name: string, isEnabled: boolean) {
  return useQuery(memberQueryOptions.checkNickname(name, isEnabled));
}
