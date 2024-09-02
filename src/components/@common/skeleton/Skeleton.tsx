import React from 'react';

import { cn } from '@/utils';

interface SkeletonProps {
  className?: string;
}

const Skeleton = ({ className, ...props }: SkeletonProps) => {
  return (
    <div
      className={cn('animate-pulse bg-black200', className)}
      {...props}
    ></div>
  );
};

export default Skeleton;
