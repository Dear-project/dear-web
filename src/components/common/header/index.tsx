import React from "react";
import * as S from "./style";
import Image from "next/image";
import Image31 from "public/Ellipse 31.png";

const index = () => {
  // const handleButtonClick = () => {
  //   // 버튼 클릭 시 실행될 로직 작성
  //   console.log("버튼이 클릭되었습니다.");
  //   // 예를 들어, 상태 변경 로직 추가
  //   setIsButtonClicked(true);
  //   // 다른 컴포넌트로 이동하는 로직 추가
  //   navigator("/next-page");
  // };

  return (
    <S.Main>
      <div>
        <S.Banner>
          <S.Textbunddle>
            <S.Text>#DEAR. 사용 가이드</S.Text>
            <S.Text1>DEAR.에서 유용한 정보</S.Text1>
            <S.Text1>얻는 방법</S.Text1>
          </S.Textbunddle>
          <S.ButtonWrapper>
            {/* <S.ButtonImage /> 알아서 고치세요 */}
            <S.ButtonText>확인하기</S.ButtonText>
            <S.Button />
          </S.ButtonWrapper>
        </S.Banner>
      </div>
    </S.Main>
  );
};

export default index;
function setIsButtonClicked(arg0: boolean) {
  throw new Error("Function not implemented.");
}
