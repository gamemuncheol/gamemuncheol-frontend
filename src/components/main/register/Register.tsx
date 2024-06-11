import Modal from '@/components/@common/modal/Modal';
import React from 'react';

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
      >
        <div>searchbar</div>
      </Modal>
    </div>
  );
};

export default Register;
