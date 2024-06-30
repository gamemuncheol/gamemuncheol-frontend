import React from 'react';

import { cn } from '@/utils';

interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

const Separator = ({
  orientation = 'horizontal',
  className,
}: SeparatorProps) => {
  return (
    <div
      className={cn(
        'shrink-0 border-[0.5px] border-solid border-black200',
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        className,
      )}
    ></div>
  );
};

export default Separator;
