import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../api';
import { memberKeys } from '../queryKeys';

const memberService = {
  patchAgree: async () => {
    const response = await api.patch('/privacy');
    return response.data.data;
  },
  patchNickname: async (name: string) => {
    const response = await api.patch(`/api/members/nickname/${name}`);
    return response.data.data;
  },
};

const memberMutationOptions = {
  patchAgree: (queryClient: QueryClient) => ({
    mutationFn: () => memberService.patchAgree(),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: memberKeys.agree,
        exact: true,
      });
    },
  }),
  checkNickname: (name: string, queryClient: QueryClient) => ({
    mutationFn: () => memberService.patchNickname(name),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: memberKeys.nickname(name),
        exact: true,
      });
    },
  }),
};

export function usePatchAgree() {
  const queryClient = useQueryClient();
  return useMutation(memberMutationOptions.patchAgree(queryClient));
}

export function usePatchNickname(name: string) {
  const queryClient = useQueryClient();
  return useMutation(memberMutationOptions.checkNickname(name, queryClient));
}
