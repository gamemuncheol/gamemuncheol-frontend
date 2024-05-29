export const memberKeys = {
  agree: ['agree'] as const,
  nickname: (name: string) => ['nickname', name],
};
