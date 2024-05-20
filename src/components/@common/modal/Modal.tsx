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
    <div className="bg-white rounded-3xl">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div>{title}</div>
          <div>{subtitle}</div>
        </div>
        <Image width={20} height={20} priority src={xbutton} alt="x" />
      </div>
      <div>{children}</div>
      <div className="flex flex-row">
        <div onClick={leftButton.onClick}>{leftButton.text}</div>
        <div onClick={rightButton.onClick}>{rightButton.text}</div>
      </div>
    </div>
  );
};

export default Modal;
