import React, { useState } from 'react';
import { UnChecked, Checked, RightArrow } from '@/assets';
import Image from 'next/image';
import { AgreementState } from '@/types/member-type';
import Modal from '@/components/@common/modal/Modal';
import { useRouter } from 'next/navigation';

const Agree = () => {
  const router = useRouter();
  const [checkAgree, setCheckAgree] = useState<AgreementState>({
    ageCheck: false,
    serviceCheck: false,
    privateInfoCheck: false,
    advertiseCheck: false,
  });

  const handleAgreeToggle = (key: keyof AgreementState) => {
    setCheckAgree((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // 모두 동의
  const handleAllAgree = () => {
    const newState = !Object.values(checkAgree).every(Boolean);
    setCheckAgree({
      ageCheck: newState,
      serviceCheck: newState,
      privateInfoCheck: newState,
      advertiseCheck: newState,
    });
  };

  const handleClose = () => {
    // setIsOpen(false);
    router.push('/');
  };

  return (
    <div className="w-[485px] h-[465px]">
      <Modal
        title="약관에 동의해주세요"
        subtitle="여러분의 개인정보와 서비스 이용권리, 잘 지켜드릴게요"
        onClose={handleClose}
        leftButton={{ text: '취소', onClick: handleClose }}
        rightButton={{ text: '확인', onClick: handleClose }}
      >
        <div className="flex flex-col gap-2 pb-[20px] pt-[20px]">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-4">
              <div className="cursor-pointer" onClick={handleAllAgree}>
                <Image
                  src={Object.values(checkAgree).every(Boolean) ? Checked : UnChecked}
                  alt="allagree"
                />
              </div>
              <div className="flex items-center body04R w-[100%] justify-between">
                <div className="flex flex-col gap-3">
                  <div className="title05B">모두 동의</div>
                  <div className="body05R text-fontcolor03">
                    서비스 이용을 위해 아래 약관에 모두 동의합니다.
                  </div>
                </div>
                <Image src={RightArrow} width={28} height={28} priority alt="next" />
              </div>
            </div>
            <div className=" border-b-[1px] pb-[5px] border-b-black100"></div>
          </div>

          <div className="flex flex-row gap-4">
            <div className="cursor-pointer" onClick={() => handleAgreeToggle('ageCheck')}>
              <Image
                src={checkAgree.ageCheck ? Checked : UnChecked}
                width={30}
                height={30}
                priority
                alt="agecheck"
              />
            </div>
            <div className="flex items-center body04R w-[100%] justify-between">
              <div className="flex ">[필수] 만 14세 이상입니다.</div>
              <Image src={RightArrow} width={28} height={28} priority alt="next" />
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <div className="cursor-pointer" onClick={() => handleAgreeToggle('serviceCheck')}>
              <Image
                src={checkAgree.serviceCheck ? Checked : UnChecked}
                width={30}
                height={30}
                priority
                alt="servicecheck"
              />
            </div>
            <div className="flex items-center body04R w-[100%] justify-between">
              <div className="flex ">[필수] 서비스 이용 약관 동의</div>
              <Image src={RightArrow} width={28} height={28} priority alt="next" />
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <div className="cursor-pointer" onClick={() => handleAgreeToggle('privateInfoCheck')}>
              <Image
                src={checkAgree.privateInfoCheck ? Checked : UnChecked}
                width={30}
                height={30}
                priority
                alt="privatecheck"
              />
            </div>
            <div className="flex items-center body04R w-[100%] justify-between">
              <div className="flex ">[필수] 개인정보 처리방침 동의</div>
              <Image src={RightArrow} width={28} height={28} priority alt="next" />
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <div className="cursor-pointer" onClick={() => handleAgreeToggle('advertiseCheck')}>
              <Image
                src={checkAgree.advertiseCheck ? Checked : UnChecked}
                width={30}
                height={30}
                priority
                alt="advertisecheck"
              />
            </div>
            <div className="flex items-center body04R w-[100%] justify-between">
              <div className="flex ">[선택] 마켓팅 수신 동의</div>
              <Image src={RightArrow} width={28} height={28} priority alt="next" />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Agree;
