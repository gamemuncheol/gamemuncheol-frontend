'use client';

import api from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import { postUploadKeys } from '../queryKeys';

const postUploadService = {
  getGameInfo: async (id: string) => {
    const response = await api.get(`/api/riot/search-matches/${id}`);
    console.log('res', response);
    return response;
  },
};

const postUploadQueryOptions = {
  gameInfo: (id: string, isEnabled: boolean) => ({
    queryKey: postUploadKeys.riotid(id),
    queryFn: () => postUploadService.getGameInfo(id),
    enabled: isEnabled,
    throwOnError: (error: any) => error.response?.status == 404,
  }),
};

export function useGetGameInfo(id: string, isEnabled: boolean) {
  return useQuery(postUploadQueryOptions.gameInfo(id, isEnabled));
}
