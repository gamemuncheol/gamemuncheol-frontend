import {
  ModalProps,
  ModalHeaderProps,
  ModalFooterProps,
} from '@/types/common-type';
import xbutton from '@/assets/common/x.svg';
import Image from 'next/image';

import Portal from '@/components/@common/portal/Portal';
import { forwardRef } from 'react';

const ModalRoot = ({ children, width = 'auto' }: ModalProps) => {
  return (
    <Portal>
      <div className="fixed inset-0 z-10 flex w-[100%] items-center justify-center bg-black bg-opacity-50">
        <div className="rounded-3xl bg-white p-4" style={{ width: width }}>
          <div>{children}</div>
        </div>
      </div>
    </Portal>
  );
};

const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ title, subtitle, children, onClose }, ref) => {
    return (
      <div>
        <div ref={ref} className="flex flex-row justify-between pb-2 pt-[10px]">
          <div className="flex flex-col gap-2">
            <h2 className="title04B">{title}</h2>
            <div className="body04R text-fontcolor03">{subtitle}</div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <button className="cursor-pointer" onClick={onClose}>
              <Image width={32} height={32} priority src={xbutton} alt="x" />
            </button>
          </div>
        </div>
        {children}
      </div>
    );
  },
);

const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ leftButton, rightButton, canRight, isDisable }, ref) => (
    <div ref={ref} className="flex h-[40px] flex-row justify-evenly">
      <div
        className="flex w-[48%] cursor-pointer items-center justify-center bg-black500"
        onClick={leftButton.onClick}
      >
        <div className="body04M text-white">{leftButton.text}</div>
      </div>
      {isDisable ? (
        <div
          className={`flex w-[48%] cursor-pointer items-center justify-center ${
            canRight ? 'bg-mainPurple' : 'bg-disablePurple'
          } `}
          onClick={canRight ? rightButton.onClick : undefined}
        >
          <div className="body04M text-white">{rightButton.text}</div>
        </div>
      ) : (
        <div
          className="flex w-[48%] cursor-pointer items-center justify-center bg-mainPurple"
          onClick={rightButton.onClick}
        >
          <div className="body04M text-white">{rightButton.text}</div>
        </div>
      )}
    </div>
  ),
);

export const Modal = Object.assign(ModalRoot, {
  Header: ModalHeader,
  Footer: ModalFooter,
});
