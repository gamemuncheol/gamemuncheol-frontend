import { ModalProps } from '@/types/common-type';
import xbutton from '@/assets/common/x.svg';
import Image from 'next/image';
const Modal = ({
  title,
  subtitle,
  isOpen,
  onClose,
  children,
  leftButton,
  rightButton,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="bg-white rounded-3xl p-4">
      <div className="flex flex-row justify-between pb-2 border-b-[1px] border-b-black300">
        <div className="flex flex-col">
          <div className="title04B">{title}</div>
          <div className="text-fontcolor03 body04R ">{subtitle}</div>
        </div>
        <Image
          width={32}
          height={32}
          priority
          src={xbutton}
          alt="x"
          className="cursor-pointer"
        />
      </div>
      <div>{children}</div>
      <div className="flex flex-row justify-between h-[40px]">
        <div
          className="w-[48%] bg-black500 flex items-center justify-center cursor-pointer"
          onClick={leftButton.onClick}
        >
          <div className="body04M text-white">{leftButton.text}</div>
        </div>
        <div
          className="w-[48%] bg-mainPurple flex items-center justify-center cursor-pointer"
          onClick={rightButton.onClick}
        >
          <div className="body04M text-white">{rightButton.text}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
