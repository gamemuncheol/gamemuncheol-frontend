'use client';

import { useEffect, useState } from 'react';

import useLoginStore from '@/store/useMemberStore';
import { UserAgree, Nickname } from '@/components/index';
import { usePatchAgree } from '@/services/mutations/member';
import { useIsAgree } from '@/services/queries/member';

export default function SignupView() {
  //로그인 성공 여부
  const isLoggined = useLoginStore((state) => state.isLoggined);

  // is-agreed api
  const { data: isAgreed, isLoading: isAgreedLoading } = useIsAgree(isLoggined);
  const { mutate: patchAgree } = usePatchAgree();

  // modal
  const [showNickname, setShowNickname] = useState(false);

  useEffect(() => {
    if (isAgreed) {
      setShowNickname(true);
    }
  }, [isAgreed]);

  const handleAgreeConfirm = () => {
    patchAgree();
    setShowNickname(true);
  };

  if (isAgreedLoading) {
    return <div className="body01R text-white">로딩 중.. 잠시만 기다려주세요</div>;
  }

  return (
    <>
      {!isAgreed && <UserAgree handleAllAgreeConfirm={handleAgreeConfirm} />}
      {showNickname && <Nickname />}
    </>
  );
}
