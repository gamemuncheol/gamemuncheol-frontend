import React from 'react';

import { MainHot, MainBonfire, MainLoudspeaker } from '@/assets/';

import Image from 'next/image';

import VideoContainerLayout from './layout';
import Profile from '@/components/main/components/profile/Profile';
import Thumbnail from '@/components/main/components/thumbnail/Thumbnail';
import { Graph } from '@/components/main/components/graph/Graph';

export default function Main() {
  return (
    <ul>
      <li className="flex justify-center items-center">
        <VideoContainerLayout
          params={{
            category: 'Hot!',
            title: `놓치지 마세요!\n실시간 인기 롤문철.`,
            image: (
              <Image
                priority
                width={0}
                height={0}
                src={MainHot}
                sizes="100vw"
                placeholder="empty"
                alt="mainHot"
              />
            ),
          }}
        >
          <article className="flex flex-row gap-5 flex-wrap ">
            {Array.from({ length: 3 }).map((item, index) => {
              return (
                <div key={index} className="flex flex-col overflow-hidden ">
                  <div className="flex flex-row gap-[0.375rem]">
                    <Profile src={MainBonfire} />

                    <div className="p-[0.375rem]">
                      <p>nickName</p>
                      <p className="text-xs text-primary-font-color caption02">
                        조회수 5.9만회·6시간 전
                      </p>
                    </div>
                  </div>

                  <div
                    style={{ width: '100%', height: 224 }}
                    className="relative w-[33.3%] h-auto   bg-mainPurple z-2"
                  >
                    <Thumbnail width={0} height={0} src={MainLoudspeaker} />
                  </div>

                  <Graph teamAPercentage={'66%'} teamBPercentage={'44%'} />

                  <span className="mt-4">디스크립션</span>
                </div>
              );
            })}
          </article>
        </VideoContainerLayout>
      </li>

      <li>
        <VideoContainerLayout
          params={{
            category: '소중한 한표!',
            title: `지금 따끈 따근한\n치열한 불판 현장!`,
            image: (
              <Image
                priority
                width={0}
                height={0}
                src={MainBonfire}
                sizes="100vw"
                placeholder="empty"
                alt="mainHot"
              />
            ),
          }}
        >
          <article className="flex flex-row gap-5 flex-wrap ">
            {Array.from({ length: 3 }).map((item, index) => {
              return (
                <div key={index} className="flex flex-col overflow-hidden ">
                  <div className="flex flex-row gap-[0.375rem]">
                    <Profile src={MainBonfire} />

                    <div className="p-[0.375rem]">
                      <p>nickName</p>
                      <p className="text-xs text-primary-font-color caption02">
                        조회수 5.9만회·6시간 전
                      </p>
                    </div>
                  </div>

                  <div
                    style={{ width: 414, height: 224 }}
                    className="relative w-[100%] h-auto   bg-mainPurple z-2"
                  >
                    <Thumbnail width={0} height={0} src={MainLoudspeaker} />
                  </div>
                  <Graph teamAPercentage={'66%'} teamBPercentage={'44%'} />

                  <span className="mt-4">디스크립션</span>
                </div>
              );
            })}
          </article>
        </VideoContainerLayout>
      </li>

      <li>
        <VideoContainerLayout
          params={{
            category: '따끈 따끈한',
            title: `방금 올라온\n 최신 롤문철영상!`,
            image: (
              <Image
                priority
                width={0}
                height={0}
                src={MainLoudspeaker}
                sizes="100vw"
                placeholder="empty"
                alt="mainHot"
              />
            ),
          }}
        >
          <article className="flex flex-row gap-5 flex-wrap ">
            {Array.from({ length: 3 }).map((item, index) => {
              return (
                <div key={index} className="flex flex-col overflow-hidden ">
                  <div className="flex flex-row gap-[0.375rem]">
                    <Profile src={MainBonfire} />

                    <div className="p-[0.375rem]">
                      <p>nickName</p>
                      <p className="text-xs text-primary-font-color caption02">
                        조회수 5.9만회·6시간 전
                      </p>
                    </div>
                  </div>

                  <div
                    style={{ width: 414, height: 224 }}
                    className="relative w-[100%] h-auto   bg-mainPurple z-2"
                  >
                    <Thumbnail width={0} height={0} src={MainLoudspeaker} />
                  </div>
                  <Graph teamAPercentage={'66%'} teamBPercentage={'44%'} />

                  <span className="mt-4">디스크립션</span>
                </div>
              );
            })}
          </article>
        </VideoContainerLayout>
      </li>
    </ul>
  );
}
