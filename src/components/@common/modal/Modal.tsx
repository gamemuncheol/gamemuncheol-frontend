import { ModalProps } from '@/types/common-type';
import xbutton from '@/assets/common/x.svg';
import Image from 'next/image';
const Modal = ({
  title,
  subtitle,
  onClose,
  children,
  leftButton,
  rightButton,
  isDisable,
  canRight,
  width = 'auto',
}: ModalProps) => {
  return (
    <div className="fixed inset-0 z-10 flex w-[100%] items-center justify-center bg-black bg-opacity-50">
      <div className="rounded-3xl bg-white p-4" style={{ width: width }}>
        <div className="flex flex-row justify-between border-b-[1px] border-b-black300 pb-2 pt-[10px]">
          <div className="flex flex-col gap-2">
            <div className="title04B">{title}</div>
            <div className="body04R text-fontcolor03">{subtitle}</div>
          </div>
          <div className="cursor-pointer" onClick={onClose}>
            <Image width={32} height={32} priority src={xbutton} alt="x" />
          </div>
        </div>
        <div>{children}</div>
        <div className="flex h-[40px] flex-row justify-between">
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
      </div>
    </div>
  );
};

export default Modal;
