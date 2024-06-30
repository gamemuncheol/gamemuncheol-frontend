import {
  QueryClient,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import api from '../api';
import { memberKeys } from '../queryKeys';

const memberService = {
  signup: async (key: string, agree: true, nickname: string) => {
    const data = {
      temporaryKey: key,
      privacyAgree: true,
      nickname: nickname,
    };
    const response = await api.post('/open-api/members/register', data);
    // console.log(response.data.data);
    return response.data.data;
  },
  patchNickname: async (name: string) => {
    const response = await api.patch(`/api/members/nickname/${name}`);
    return response.data.data;
  },
};

const memberMutationOptions = {
  signup: (key: string, nickname: string, queryClient: QueryClient) => ({
    mutationFn: () => memberService.signup(key, true, nickname),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: memberKeys.nickname(nickname),
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

export function usePatchNickname(name: string) {
  const queryClient = useQueryClient();
  return useMutation(memberMutationOptions.checkNickname(name, queryClient));
}

export function useSignup(key: string, nickname: string) {
  const queryClient = useQueryClient();
  return useMutation(memberMutationOptions.signup(key, nickname, queryClient));
}
