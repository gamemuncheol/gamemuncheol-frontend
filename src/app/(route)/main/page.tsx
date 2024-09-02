'use client';

import React from 'react';

import { MainHot, MainBonfire, MainLoudspeaker, Lightning } from '@/assets/';

import Image from 'next/image';

import VideoContainerLayout from './layout';
import Profile from '@/components/main/components/profile/Profile';
import Thumbnail from '@/components/main/components/thumbnail/Thumbnail';
import { Graph } from '@/components/main/components/graph/Graph';
import { useMainQueries } from '@/services/queries/main';
import { Skeleton } from '@/components';

export default function Main() {
  const { mainListData, mainListLoading } = useMainQueries();

  return (
    <ul>
      <li className="flex items-center justify-center">
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
          {mainListLoading ? (
            <div className="flex gap-5">
              {[...Array(3)].map((_, index) => (
                <CardSkeleton key={index} />
              ))}
            </div>
          ) : (
            <article className="flex flex-row flex-wrap gap-5">
              {mainListData?.slice(0, 5).map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex w-[26.5rem] flex-col overflow-hidden"
                  >
                    <div className="flex flex-row gap-[0.375rem]">
                      <Profile src={item.member.picture ?? MainBonfire} />

                      <div className="p-[0.375rem]">
                        <p>{item.member.nickname}</p>
                        <p className="caption02 text-xs text-primary-font-color">
                          조회수 {item.viewCount}회·6시간 전
                        </p>
                      </div>
                    </div>

                    <div
                      style={{ width: 424, height: 228 }}
                      className="z-2 relative bg-mainPurple"
                    >
                      <Thumbnail
                        width={0}
                        height={0}
                        src={item.thumbnailUrl ?? MainLoudspeaker}
                      />
                    </div>

                    <Graph teamAPercentage={'66%'} teamBPercentage={'44%'} />

                    <span className="mt-4">{item?.content ?? ''}</span>
                  </div>
                );
              })}
            </article>
          )}
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
          {mainListLoading ? (
            <div className="flex gap-5">
              {[...Array(3)].map((_, index) => (
                <CardSkeleton key={index} />
              ))}
            </div>
          ) : (
            <article className="flex flex-row flex-wrap gap-5">
              {mainListData?.slice(0, 5).map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex w-[26.5rem] flex-col overflow-hidden"
                  >
                    <div className="flex flex-row gap-[0.375rem]">
                      <Profile src={MainBonfire} />

                      <div className="p-[0.375rem]">
                        <p>nickName</p>
                        <p className="caption02 text-xs text-primary-font-color">
                          조회수 5.9만회·6시간 전
                        </p>
                      </div>
                    </div>

                    <div
                      style={{ width: 424, height: 228 }}
                      className="z-2 relative bg-mainPurple"
                    >
                      <Thumbnail width={0} height={0} src={MainLoudspeaker} />
                    </div>
                    <Graph teamAPercentage={'66%'} teamBPercentage={'44%'} />

                    <span className="mt-4">{item.content}</span>
                  </div>
                );
              })}
            </article>
          )}
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
          {mainListLoading ? (
            <div className="flex gap-5">
              {[...Array(3)].map((_, index) => (
                <CardSkeleton key={index} />
              ))}
            </div>
          ) : (
            <article className="flex flex-row flex-wrap gap-5">
              {mainListData?.slice(0, 5).map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex w-[26.5rem] flex-col overflow-hidden"
                  >
                    <div className="flex flex-row gap-[0.375rem]">
                      <Profile src={MainBonfire} />

                      <div className="p-[0.375rem]">
                        <p>nickName</p>
                        <p className="caption02 text-xs text-primary-font-color">
                          조회수 5.9만회·6시간 전
                        </p>
                      </div>
                    </div>

                    <div
                      style={{ width: 424, height: 228 }}
                      className="z-2 relative bg-mainPurple"
                    >
                      <Thumbnail width={0} height={0} src={MainLoudspeaker} />
                    </div>
                    <Graph teamAPercentage={'66%'} teamBPercentage={'44%'} />

                    <span className="mt-4">{item.content}</span>
                  </div>
                );
              })}
            </article>
          )}
        </VideoContainerLayout>
      </li>
    </ul>
  );
}

const CardSkeleton = () => {
  return (
    <div>
      <div className="flex gap-1">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-1">
          <Skeleton className="h-4 w-14 rounded-md" />
          <div className="flex items-center gap-1">
            <Skeleton className="h-4 w-14 rounded-md" />
            ·
            <Skeleton className="h-4 w-12 rounded-md" />
          </div>
        </div>
      </div>

      <div className="w-[424px]">
        <Skeleton className="h-[228px]" />
        <Skeleton className="mt-1 h-8 rounded-md" />

        <Skeleton className="mt-4 h-8 rounded-md" />
      </div>
    </div>
  );
};
