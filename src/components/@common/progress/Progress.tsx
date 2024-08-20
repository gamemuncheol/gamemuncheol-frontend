import React from 'react';

interface ProgressProps {
  value: string;
}

const Progress = ({ value }: ProgressProps) => {
  return (
    <div className="h-4 w-full rounded-full border-0 border-white bg-disablePurple">
      <div
        className="flex h-4 items-center justify-center rounded-l-full bg-mainPurple"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};

export default Progress;
