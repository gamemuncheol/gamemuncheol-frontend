import { useMutation, UseMutationOptions, useQueryClient } from '@tanstack/react-query';
import api from '../api';
import { memberKeys } from '../queryKeys';

const patchAgree = async () => {
  const response = await api.patch('/privacy/agree');
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

export { usePatchAgree };
