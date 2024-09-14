import { Modal } from '@/components/@common/modal/Modal';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { CircleInfo, TempInformation, Path } from '@/assets/index';
import { modaltitles } from '@/constants/PostUpload';
import Progress from '@/components/@common/progress/Progress';
import Input from '@/components/@common/input/Input';
import { useGetGameInfo } from '@/services/queries/post-upload';
// 공통
const PostUpload = ({ closeModal }: { closeModal: () => void }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep === 3) {
      // TODO: 게시물 등록
      closeModal();
    } else {
      setCurrentStep(currentStep + 1);
    }
  };
  const prevStep = () => {
    if (currentStep === 1) {
      closeModal();
    } else {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div>
      <Modal width="700px">
        <Modal.Header
          title={modaltitles[currentStep]}
          subtitle="롤문철이 명쾌하게 판단해드려요."
          onClose={closeModal}
        />
        <Progress step={currentStep} maxStep={3}></Progress>
        {currentStep === 1 && <Step1></Step1>}
        {currentStep === 2 && <Step2></Step2>}
        {currentStep === 3 && <Step3></Step3>}
        <Modal.Footer
          leftButton={{
            text: currentStep === 1 ? '취소' : '이전',
            onClick: prevStep,
          }}
          rightButton={{ text: '다음', onClick: nextStep }}
        />
      </Modal>
    </div>
  );
};

const Step1 = () => {
  const [gameId, setGameId] = useState('');
  const [search, setSearch] = useState(false);
  const handleGameIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGameId(e.target.value);
  };

  const handleEnter = (e: any) => {
    if (e.key === 'Enter') {
      console.log(gameinfo);
      console.log(isError);
      setSearch(true);
    }
  };

  const { data: gameinfo, isError, isLoading } = useGetGameInfo(gameId, search);

  return (
    <div className="flex flex-col items-center p-5">
      <div className="flex flex-col gap-4">
        {/* 이후 search bar로 수정 */}
        <div className="w-full">
          <Input
            id="gameid"
            value={gameId}
            onChange={handleGameIdChange}
            placeholder="검색어(게임ID)을 입력해 주세요."
            onKeyDown={handleEnter}
          ></Input>
        </div>
        {isError && <div>다시 입력해주세요</div>}
        <div>
          <div className="flex flex-row items-center gap-1">
            <Image
              width={24}
              height={24}
              priority
              src={CircleInfo}
              alt="info"
            />
            <div className="body05M text-mainPurple">
              게임ID는 여기서 찾으실 수 있어요.
            </div>
          </div>
          <Image width={230} height={15} priority src={Path} alt="path" />
        </div>
        <Image
          width={360}
          height={210}
          priority
          src={TempInformation}
          alt="temp_information"
        />
      </div>
    </div>
  );
};

const Step2 = () => {
  return <div> step2 </div>;
};
const Step3 = () => {
  return <div> step3 </div>;
};
export default PostUpload;
