'use client';

import { useEffect, useState } from 'react';

import { UserAgree, Nickname } from '@/components/index';

export default function SignupView() {
  // 1 step : 개인정보 동의
  // 2 step : 닉네임 설정

  const [step, setStep] = useState(1);
  const [isAgreed, setIsAgreed] = useState(false);

  const handleAgreeConfirm = () => {
    setIsAgreed(true);
    setStep(2);
  };

  const handleCancel = () => {
    setStep(1);
  };

  return (
    <>
      {step == 1 && <UserAgree handleAllAgreeConfirm={handleAgreeConfirm} />}
      {step == 2 && <Nickname handleCancel={handleCancel} />}
    </>
  );
}
