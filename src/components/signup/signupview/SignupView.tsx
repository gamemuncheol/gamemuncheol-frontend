'use client';

import { useEffect, useState } from 'react';

import { useLoginStore } from '@/store/useMemberStore';
import { UserAgree, Nickname } from '@/components/index';

export default function SignupView() {
  //로그인 성공 여부
  const isLoggined = useLoginStore((state) => state.isLoggined);

  // 개인정보 동의 여부
  const [isAgreed, setIsAgreed] = useState(false);
  // modal
  const [showNickname, setShowNickname] = useState(false);

  useEffect(() => {
    if (isAgreed) {
      setShowNickname(true);
    }
  }, [isAgreed]);

  const handleAgreeConfirm = () => {
    setIsAgreed(true);
    setShowNickname(true);
  };

  return (
    <>
      {!isAgreed && <UserAgree handleAllAgreeConfirm={handleAgreeConfirm} />}
      {showNickname && <Nickname />}
    </>
  );
}
