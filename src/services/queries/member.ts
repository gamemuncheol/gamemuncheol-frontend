'use client';

import api from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import { memberKeys } from '../queryKeys';
import { UserInfoType } from '@/types/member-type';

const memberService = {
  getCheckNickname: async (name: string) => {
    const response = await api.get(`/open-api/members/nickname/${name}`);
    return response.data.data;
  },

  getUserInfo: async () => {
    const response = await api.get('/api/members/me');
    console.log('res:', response.data.data);
    return response.data.data;
  },
};

const memberQueryOptions = {
  checkNickname: (name: string, isEnabled: boolean) => ({
    queryKey: memberKeys.nickname(name),
    queryFn: () => memberService.getCheckNickname(name),
    enabled: isEnabled,
  }),

  userInfo: () => ({
    queryKey: memberKeys.userinfo(),
    queryFn: () => memberService.getUserInfo(),
  }),
};

export function useNameCheck(name: string, isEnabled: boolean) {
  return useQuery(memberQueryOptions.checkNickname(name, isEnabled));
}

export function useUserInfo() {
  return useQuery<UserInfoType>(memberQueryOptions.userInfo());
}
