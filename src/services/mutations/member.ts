import {
  QueryClient,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import api from '../api';
import { memberKeys } from '../queryKeys';

const memberService = {
  patchNickname: async (name: string) => {
    const response = await api.patch(`/api/members/nickname/${name}`);
    return response.data.data;
  },
};

const memberMutationOptions = {
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
