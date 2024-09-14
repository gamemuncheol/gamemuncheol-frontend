'use client';

import api from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import { postUploadKeys } from '../queryKeys';
import { AxiosError } from 'axios';

const postUploadService = {
  getGameInfo: async (id: string) => {
    const response = await api.get(`/api/riot/search-matches/${id}`);
    console.log('res', response);
    return response.data;
  },
};

const postUploadQueryOptions = {
  gameInfo: (id: string, isEnabled: boolean) => ({
    queryKey: postUploadKeys.riotid(id),
    queryFn: () => postUploadService.getGameInfo(id),
    enabled: isEnabled,
    onError: (error: AxiosError) => {
      if (error.response && error.response.status === 404) {
        console.log('404 에러 발생');
      }
    },
  }),
};

export function useGetGameInfo(id: string, isEnabled: boolean) {
  return useQuery(postUploadQueryOptions.gameInfo(id, isEnabled));
}
