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
  const { mutate: patchNickname, isSuccess } = usePatchNickname(name);

  useEffect(() => {
    if (name !== '') {
      refetch();
    }
  }, [name, refetch]);
  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    patchNickname();
  };

  useEffect(() => {
    if (isSuccess) {
      router.push('/');
    }
  }, [isSuccess]);

  return (
    <div>
      <Modal
        title="닉네임을 입력해주세요"
        subtitle="롤문철에서 사용할 닉네임을 입력해주세요."
        onClose={handleClose}
        isDisable={true}
        canRight={name !== '' && !notNameAvailable}
        leftButton={{ text: '취소', onClick: handleClose }}
        rightButton={{ text: '확인', onClick: handleSubmit }}
        width="485px"
      >
        <div className="flex h-[300px] w-[400px] flex-col justify-center">
          <div className="p-3">
            <Input
              id="name"
              value={name}
              onChange={handleNameChange}
              placeholder="사용하실 닉네임을 입력해주세요."
            />
            <div className="border-b-[1px] border-b-black300"></div>
            {notNameAvailable !== undefined && notNameAvailable && (
              <div className="body05R pt-4 text-warnColor">
                이미 등록된 닉네임입니다.
              </div>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Nickname;
