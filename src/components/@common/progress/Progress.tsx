import React from 'react';

interface ProgressProps {
  value: string;
}

const Progress = ({ value }: ProgressProps) => {
  return (
    <div className="h-1 w-full rounded-full border-0 border-white bg-black200">
      <div
        className="flex h-1 items-center justify-center rounded-l-full bg-mainPurple"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};

export default Progress;
