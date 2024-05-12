import React from 'react';
import Image from 'next/image';

type ThumbnailType = {
  width: number;
  height: number;
  src: string;
};

export default function Thumbnail(props: ThumbnailType) {
  const { width, height, src } = props;
  return (
    <Image
      priority
      src={src}
      sizes="40vw"
      placeholder="empty"
      alt="ThumbnailImage"
      fill
    />
  );
}
