import { Input, Modal, Progress } from '@/components';
import { useSignup } from '@/services/mutations/member';
import { useNameCheck } from '@/services/queries/member';
import { useTempUserStore } from '@/store/useMemberStore';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

const Nickname = ({ handleCancel }: { handleCancel: () => void }) => {
  const router = useRouter();

  const handleClose = () => {
    router.push('/');
  };

  const [name, setName] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const key = useTempUserStore((state) => state.userkey);
  const { data: notNameAvailable, refetch } = useNameCheck(name, name !== '');
  const { data: tokens, mutate: signup, isSuccess } = useSignup(key, name);

  const [cookies, setCookie, removeCookie] = useCookies(['refreshToken']);

  useEffect(() => {
    if (name !== '') {
      refetch();
    }
  }, [name, refetch]);

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    signup();
  };

  useEffect(() => {
    if (isSuccess) {
      setCookie('refreshToken', tokens.refreshToken);
      localStorage.setItem('accessToken', tokens.accessToken);
      router.push('/');
    }
  }, [isSuccess]);

  return (
    <div>
      <Modal width="440px">
        <Modal.Header
          title="닉네임을 입력해주세요"
          subtitle="롤문철에서 사용할 닉네임을 입력해주세요."
          onClose={handleClose}
        />
        <Progress step={2} maxStep={2}></Progress>
        <div className="flex h-[226px] w-[400px] flex-col justify-center">
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
        <Modal.Footer
          isDisable={true}
          canRight={name !== '' && !notNameAvailable}
          leftButton={{ text: '이전', onClick: handleCancel }}
          rightButton={{ text: '확인', onClick: handleSubmit }}
        />
      </Modal>
    </div>
  );
};

export default Nickname;
