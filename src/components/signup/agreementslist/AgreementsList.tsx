import React from 'react';
import { UnChecked, Checked, RightArrow } from '@/assets';
import Image from 'next/image';
import {
  AdvertiseCheckContent,
  PrivateInfoCheckContent,
  ServiceCheckContent,
} from '../agreecontent/Agreecontent';
import { AgreementState } from '@/types/member-type';

interface AgreeListProps {
  checkAgree: AgreementState;
  handleAgreeToggle: (key: keyof AgreementState) => void;
  handleAllAgree: () => void;
  handleContentClick: (content: React.ReactNode, key: keyof AgreementState) => void;
}

const AgreementsList = ({
  checkAgree,
  handleAgreeToggle,
  handleAllAgree,
  handleContentClick,
}: AgreeListProps) => {
  return (
    <div className="flex flex-col gap-3 pb-[20px] pt-[20px]">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-4 cursor-pointer" onClick={handleAllAgree}>
          <div>
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
            {/* <Image src={RightArrow} width={28} height={28} priority alt="next" /> */}
          </div>
        </div>
        <div className="border-b-[1px] pb-[5px] border-b-black100"></div>
      </div>

      <div
        className="flex flex-row gap-4 cursor-pointer"
        onClick={() => handleAgreeToggle('ageCheck')}
      >
        <div>
          <Image
            src={checkAgree.ageCheck ? Checked : UnChecked}
            width={30}
            height={30}
            priority
            alt="agecheck"
          />
        </div>
        <div className="flex items-center body04R w-[100%] justify-between">
          <div className="flex">[필수] 만 14세 이상입니다.</div>
          {/* <Image src={RightArrow} width={28} height={28} priority alt="next" /> */}
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
        <div
          className="flex items-center body04R w-[100%] justify-between cursor-pointer"
          onClick={() => handleContentClick(<ServiceCheckContent />, 'serviceCheck')}
        >
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
        <div
          className="flex items-center body04R w-[100%] justify-between cursor-pointer"
          onClick={() => handleContentClick(<PrivateInfoCheckContent />, 'privateInfoCheck')}
        >
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
        <div
          className="flex items-center body04R w-[100%] justify-between cursor-pointer"
          onClick={() => handleContentClick(<AdvertiseCheckContent />, 'advertiseCheck')}
        >
          <div className="flex ">[선택] 마켓팅 수신 동의</div>
          <Image src={RightArrow} width={28} height={28} priority alt="next" />
        </div>
      </div>
    </div>
  );
};

export default AgreementsList;
