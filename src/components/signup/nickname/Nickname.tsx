import { Input, Modal } from '@/components';
import { usePatchNickname } from '@/services/mutations/member';
import { useNameCheck } from '@/services/queries/member';
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

  const { data: notNameAvailable, refetch } = useNameCheck(name, name !== '');
  const { mutate: patchNickname, isSuccess, isError, error } = usePatchNickname();

  useEffect(() => {
    if (name !== '') {
      refetch();
    }
  }, [name, refetch]);
  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    console.log(name);
    patchNickname(name);
  };
  useEffect(() => {
    if (isSuccess) {
      router.push('/');
    }
  }, [isSuccess]);

  return (
    <div className="w-[485px] h-[465px]">
      <Modal
        title="닉네임을 입력해주세요"
        subtitle="롤문철에서 사용할 닉네임을 입력해주세요."
        onClose={handleClose}
        isDisable={true}
        canRight={name !== '' && !notNameAvailable}
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
            {notNameAvailable !== undefined && notNameAvailable && (
              <div className="body05R text-warnColor pt-4">이미 등록된 닉네임입니다.</div>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Nickname;
