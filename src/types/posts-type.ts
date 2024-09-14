export interface MatchUserType {
  id: number;
  nickname: string;
  championName: string;
  championThumbnail: string;
  win: boolean;
}

export interface GameInfoType {
  gameId: string;
  gameCreation: string;
  gameDuration: number;
  gameMode: string;
  matchUsers: MatchUserType[];
}
