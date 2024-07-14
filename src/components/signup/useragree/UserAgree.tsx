import React, { ReactNode, useState } from 'react';
import { AgreementState } from '@/types/member-type';
import Modal from '@/components/@common/modal/Modal';
import { useRouter } from 'next/navigation';
import AgreementsList from '../agreementslist/AgreementsList';
const UserAgree = ({
  handleAllAgreeConfirm,
}: {
  handleAllAgreeConfirm: () => void;
}) => {
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
    alert('회원가입 실패');
    router.push('/');
  };

  // content
  const [content, setContent] = useState<ReactNode>(null);
  const [isListView, setIsListView] = useState(true);
  const [buttons, setButtons] = useState({
    leftButton: { text: '취소', onClick: handleClose },
    rightButton: { text: '다음', onClick: handleAllAgreeConfirm },
  });

  const handleRestore = () => {
    setIsListView(true);
    setButtons({
      leftButton: { text: '취소', onClick: handleClose },
      rightButton: { text: '다음', onClick: handleAllAgreeConfirm },
    });
  };

  // 약관 내용 보여줄 때, 동의 버튼 클릭 시 동작하는 함수
  const handleAgree = (key: keyof AgreementState) => {
    setCheckAgree((prev) => ({ ...prev, [key]: true }));
    handleRestore();
  };
  // 특정 약관 클릭시,
  const handleContentClick = (
    content: ReactNode,
    key: keyof AgreementState,
  ) => {
    setIsListView(false);
    setContent(content);
    setButtons({
      leftButton: { text: '이전', onClick: handleRestore },
      rightButton: { text: '동의', onClick: () => handleAgree(key) },
    });
  };

  // 다음 버튼 활성화 체크
  const isDisable =
    !checkAgree.ageCheck ||
    !checkAgree.serviceCheck ||
    !checkAgree.privateInfoCheck;
  const canRight =
    checkAgree.ageCheck &&
    checkAgree.serviceCheck &&
    checkAgree.privateInfoCheck;

  return (
    <div className="h-[465px] w-[485px]">
      <Modal
        title="약관에 동의해주세요"
        subtitle="여러분의 개인정보와 서비스 이용권리, 잘 지켜드릴게요"
        onClose={handleClose}
        leftButton={buttons.leftButton}
        rightButton={buttons.rightButton}
        {...(isListView ? { isDisable, canRight } : {})}
        width="485px"
      >
        {isListView ? (
          <AgreementsList
            checkAgree={checkAgree}
            handleAgreeToggle={handleAgreeToggle}
            handleAllAgree={handleAllAgree}
            handleContentClick={handleContentClick}
          />
        ) : (
          content
        )}
      </Modal>
    </div>
  );
};

export default UserAgree;
