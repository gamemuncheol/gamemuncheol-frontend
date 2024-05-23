import React from 'react';

export const ServiceCheckContent = () => {
  return (
    <div className="h-[246px] w-[370px] overflow-y-scroll m-[10px]">
      <h1>서비스 이용 약관 내용</h1>
      <div>
        제1조(목적등) ① 롤문철 인터넷 회원 약관(이하 "본 약관" 이라 합니다)은 이용자가 롤문철에서
        제공하는 인터넷 관련 서비스(이하 "서비스"라 합니다)를 이용함에 있어 이용자와 롤문철에
        권리·의무 및 책임사항을 규정함을 목적으로 합니다. ② 이용자가 되고자 하는 자가 롤문철이 정한
        소정의 절차를 거쳐서 "동의" 버튼을 누르면 본 약관에 동의하는 것으로 간주합니다. 본 약관에
        정하는 이외의 이용자와 롤문철에 권리, 의무 및 책임사항에 관해서는 전기통신사업법
        기타대한민국의 관련법령과 상관습에 의합니다.
        {/* scroll test를 위한 임시 텍스트 */}
      </div>
    </div>
  );
};
export const PrivateInfoCheckContent = () => {
  return (
    <div className="h-[246px] w-[370px] overflow-y-scroll m-[10px]">
      <div>개인정보 처리방침 약관 내용 ~~~~</div>
    </div>
  );
};
export const AdvertiseCheckContent = () => {
  return (
    <div className="h-[246px] w-[370px] overflow-y-scroll m-[10px]">
      <div>마케팅 약관 내용 ~~~~</div>
    </div>
  );
};
