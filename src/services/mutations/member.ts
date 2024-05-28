import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../api';
import { memberKeys } from '../queryKeys';

const patchAgree = async () => {
  const response = await api.patch('/privacy');
  return response.data;
};

const usePatchAgree = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: patchAgree,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [memberKeys.patchagree],
        exact: true,
      });
    },
  });
};

const patchNickname = async (name: string) => {
  const response = await api.patch(`/api/member/nickname/${name}`);
  return response.data.data;
};

const usePatchNickname = () => {
  return useMutation({
    mutationFn: patchNickname,
  });
};
export { usePatchAgree, usePatchNickname };
