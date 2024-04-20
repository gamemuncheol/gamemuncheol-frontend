import React from 'react';
import VideoContainerLayout from './layout';

import { MainHot, MainBonfire, MainLoudspeaker } from '@/assets/';

import Image from 'next/image';
import { Graph } from '@/components/Main/components/Graph/Graph';

export default function Main() {
  return (
    <ul>
      <li>
        <VideoContainerLayout
          category="Hot!"
          title={`놓치지 마세요!\n실시간 인기 롤문철.`}
          image={
            <Image
              priority
              width={0}
              height={0}
              src={MainHot}
              sizes="100vw"
              placeholder="empty"
              alt="mainHot"
            />
          }
        >
          <Graph teamAPercentage={'66%'} teamBPercentage={'44%'} />
        </VideoContainerLayout>
      </li>

      <li>
        <VideoContainerLayout
          category="소중한 한표!"
          title={`지금 따끈 따근한\n치열한 불판 현장!`}
          image={
            <Image
              priority
              width={0}
              height={0}
              src={MainBonfire}
              sizes="100vw"
              placeholder="empty"
              alt="mainHot"
            />
          }
        >
          <div></div>
        </VideoContainerLayout>
      </li>

      <li>
        <VideoContainerLayout
          category="따끈 따끈한"
          title={`방금 올라온\n 최신 롤문철영상!`}
          image={
            <Image
              priority
              width={0}
              height={0}
              src={MainLoudspeaker}
              sizes="100vw"
              placeholder="empty"
              alt="mainHot"
            />
          }
        >
          <div></div>
        </VideoContainerLayout>
      </li>
    </ul>
  );
}
