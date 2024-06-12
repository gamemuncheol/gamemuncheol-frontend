import Modal from '@/components/@common/modal/Modal';
import React from 'react';
import Image from 'next/image';

import { CircleInfo, TempInformation, Path } from '@/assets/index';
const Register = () => {
  const tempClick = () => {
    console.log('click');
  };
  return (
    <div>
      <Modal
        title="전적입력을 위해 게임ID를 입력해 주세요."
        subtitle="롤문철이 명쾌하게 판단해드려요."
        onClose={tempClick}
        leftButton={{ text: '취소', onClick: tempClick }}
        rightButton={{ text: '다음', onClick: tempClick }}
        width="700px"
      >
        <div className="flex flex-col items-center p-5">
          <div className="flex flex-col gap-4">
            <div>searchbar - 이후 추가</div>
            <div>
              <div className="flex flex-row items-center gap-1">
                <Image
                  width={24}
                  height={24}
                  priority
                  src={CircleInfo}
                  alt="info"
                />
                <div className="body05M text-mainPurple">
                  게임ID는 여기서 찾으실 수 있어요.
                </div>
              </div>
              <Image width={230} height={15} priority src={Path} alt="path" />
            </div>
            <Image
              width={360}
              height={210}
              priority
              src={TempInformation}
              alt="temp_information"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Register;
