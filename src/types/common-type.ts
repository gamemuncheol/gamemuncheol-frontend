// 공통 컴포넌트의 type 정의
export interface FooterProps {
  use?: string;
}

export interface ModalProps {
  title: string; // 제목
  subtitle: string; // 소제목
  onClose: () => void; // X 버튼(취소 버튼)을 클릭했을 때 호출할 함수
  children: React.ReactNode; //가운데 내용 영역에 들어갈 React 노드
  leftButton: {
    //하단 왼쪽 버튼 커스터마이징
    text: string;
    onClick: () => void;
  };
  rightButton: {
    //하단 오른쪽 버튼 커스터마이징
    text: string;
    onClick: () => void;
  };
}
