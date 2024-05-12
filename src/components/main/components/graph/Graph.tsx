import React from 'react';
import Image from 'next/image';
import { Lightning } from '../../../../assets';

const position = {
  left: 'left',
  right: 'right',
} as const;

type Union<T> = T[keyof T];
type Position = Union<typeof position>;

interface IGraphLeftComp {
  fill?: string;
  position: Position;
}

export const GraphSVG = (props: IGraphLeftComp) => {
  const { fill, position } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={212}
      height={28}
      fill={'none'}
      {...props}
    >
      {position === 'left' ? (
        <>
          <path fill="url(#a)" d="M0 0h212v28H0z" />
          <defs>
            <linearGradient
              id="a"
              x1={212}
              x2={0}
              y1={28}
              y2={28}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0.51} stopColor={fill} />
              <stop offset={1} stopColor="#D9D9D9" stopOpacity={0} />
            </linearGradient>
          </defs>
        </>
      ) : (
        <>
          <path fill="url(#b)" d="M0 0h212v28H0z" />
          <defs>
            <linearGradient
              id="b"
              x1={6.514}
              x2={212}
              y1={28}
              y2={28}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0.61} stopColor={fill} />
              <stop offset={1} stopColor="#D9D9D9" stopOpacity={0} />
            </linearGradient>
          </defs>
        </>
      )}
    </svg>
  );
};

interface IGraph {
  teamAPercentage: string;
  teamBPercentage: string;
}

export const Graph = (props: IGraph) => {
  const { teamAPercentage, teamBPercentage } = props;
  return (
    <div className="flex relative mt-1">
      <article className="flex relative">
        <GraphSVG fill="#E2148E" position="left" />
        <div className="font-SansNeoRegular absolute left-[9rem] text-lg flex justify-center items-center text-white">
          {teamAPercentage}
        </div>
      </article>

      <article
        style={{ zIndex: 1 }}
        className="absolute left-[12.8rem] top-[-0.22rem]"
      >
        <Image
          style={{ width: 24 }}
          priority
          width={0}
          height={0}
          src={Lightning}
          sizes="100vw"
          placeholder="empty"
          alt="Lightning"
        />
      </article>

      <article className="flex relative">
        <GraphSVG fill="#5E44DD" position="right" />
        <div className="font-SansNeoRegular absolute right-[9rem] text-lg flex justify-center items-center text-white">
          {teamBPercentage}
        </div>
      </article>
    </div>
  );
};
