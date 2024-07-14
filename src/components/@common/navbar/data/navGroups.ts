import lolmuncheol from '@/assets/menu/navbar/lolmuncheol.svg';
import like from '@/assets/menu/navbar/like.svg';
import video from '@/assets/menu/navbar/video.svg';
import add from '@/assets/menu/navbar/add.svg';

const communicationGroup = [
  {
    id: 'lolmuncheol',
    src: lolmuncheol,
    collapseText: '롤문챗',
    expandText: '롤문챗',
  },
];
const meGroup = [
  {
    id: 'like',
    src: like,
    collapseText: '좋아요',
    expandText: '좋아요',
  },
  {
    id: 'video',
    src: video,
    collapseText: '나',
    expandText: '내 동영상',
  },
];
const addGroup = [
  {
    id: 'add',
    src: add,
    collapseText: '등록',
    expandText: '등록',
  },
];
export const navGroups = [communicationGroup, meGroup, addGroup];
