import Image from 'next/image';
import React from 'react';

type ProfileType = {
  src: string;
};

export default function Profile(props: ProfileType) {
  const { src } = props;
  return (
    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-mainPurple relative top-[0.375rem] z-3">
      <Image
        style={{ zIndex: 2 }}
        priority
        width={0}
        height={0}
        src={src}
        sizes="100vw"
        placeholder="empty"
        alt="Profile"
      />
    </div>
  );
}
