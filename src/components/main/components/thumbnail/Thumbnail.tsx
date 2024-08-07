import React from 'react';
import Image from 'next/image';

type ThumbnailType = {
  width?: number;
  height?: number;
  src: string;
};

export default function Thumbnail(props: ThumbnailType) {
  const { src } = props;
  return (
    <Image
      priority
      src={src}
      sizes="100vw"
      placeholder="empty"
      alt="ThumbnailImage"
      fill
    />
  );
}
