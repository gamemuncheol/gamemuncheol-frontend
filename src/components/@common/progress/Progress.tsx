import React from 'react';

interface ProgressProps {
  step: number;
  maxStep: number;
}

const Progress = ({ step, maxStep }: ProgressProps) => {
  const percent = (step / maxStep) * 100;
  return (
    <div className="h-[4px] w-full rounded-[24px] border-0 border-white bg-black200">
      <div
        className="flex h-[4px] items-center justify-center rounded-[24px] bg-mainPurple"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
};

export default Progress;
