import React from 'react';
import VideoContainerLayout from './layout';

export default function Main() {
  return (
    <>
      <ul className="flex flex-col">
        <li>
          <VideoContainerLayout
            category="Hot!"
            title={`놓치지 마세요!\n실시간 인기 롤문철.`}
          >
            <div></div>
          </VideoContainerLayout>
        </li>

        <li>
          <VideoContainerLayout
            category="소중한 한표!"
            title={`지금 따끈 따근한\n치열한 불판 현장!`}
          >
            <div></div>
          </VideoContainerLayout>
        </li>

        <li>
          <VideoContainerLayout
            category="따끈 따끈한"
            title={`방금 올라온 최신 롤문철영상!`}
          >
            <div></div>
          </VideoContainerLayout>
        </li>
      </ul>
    </>
  );
}
