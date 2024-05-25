import { Modal } from '@/components';
import Input from '@/components/@common/input/Input';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Nickname = () => {
  const router = useRouter();

  const handleClose = () => {
    router.push('/');
  };

  const [name, setName] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    // 닉네임 patch api
  };

  return (
    <div className="w-[485px] h-[465px]">
      <Modal
        title="닉네임을 입력해주세요"
        subtitle="롤문철에서 사용할 닉네임을 입력해주세요."
        onClose={handleClose}
        isDisable={true}
        canRight={name == '' ? false : true}
        leftButton={{ text: '취소', onClick: handleClose }}
        rightButton={{ text: '확인', onClick: handleSubmit }}
      >
        <div className="w-[400px] h-[300px] flex flex-col justify-center">
          <div className="p-3">
            <Input
              id="name"
              value={name}
              onChange={handleNameChange}
              placeholder="사용하실 닉네임을 입력해주세요."
            />
            <div className=" border-b-[1px] border-b-black300"></div>
            {/* 닉네임 중복확인 api 추가 시 수정 예정 */}
            {/* <div className="body05R text-warnColor pt-4">이미 등록된 아이디(이메일)입니다.</div> */}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Nickname;
