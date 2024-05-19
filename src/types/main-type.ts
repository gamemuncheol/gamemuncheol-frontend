export interface MainListType {
  id: number;
  member: MemberType;
  videoUrl: string;
  thumbnailUrl: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  viewCount: number;
  voteRates: VoteRatesType[];
}

export interface MemberType {
  name: string;
  nickname: string;
  email: string;
  picture: string;
  privacyAgreed: boolean;
  score: number;
}

export interface VoteRatesType {
  matchUserId: number;
  nickname: string;
  championThumbnail: string;
  voteOptionsId: number;
  rate: number;
}
