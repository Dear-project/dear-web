import React from "react";
import * as S from "./style";
import Image from "next/image";
import ProfileImg from "@/asset/Avatar.svg";
import MoreImg from "@/asset/MoreImg.svg";
import useMain from "@/hooks/professorView/mainPage/useMain";
const RequestChatting = () => {
  const { handleModalOpen } = useMain();
  return (
    <S.RequestChattingWrap>
      <h1>채팅요청</h1>
      <S.RequestListWrap>
        <div>
          <Image src={ProfileImg} alt="프로필 이미지" width={60} height={60} />
          <div>
            <h1>조영우</h1>
            <span>박승철 헤어과 갈려면 무슨 준비해야하나요?</span>
          </div>
          <Image src={MoreImg} alt="더보기 버튼" width={40} height={40} onClick={handleModalOpen} />
        </div>
        <div>
          <Image src={ProfileImg} alt="프로필 이미지" width={60} height={60} />
          <div>
            <h1>조영우</h1>
            <span>박승철 헤어과 갈려면 무슨 준비해야하나요?</span>
          </div>
          <Image src={MoreImg} alt="더보기 버튼" width={40} height={40} />
        </div>
        <div>
          <Image src={ProfileImg} alt="프로필 이미지" width={60} height={60} onClick={handleModalOpen} />
          <div>
            <h1>조영우</h1>
            <span>박승철 헤어과 갈려면 무슨 준비해야하나요?</span>
          </div>
          <Image src={MoreImg} alt="더보기 버튼" width={40} height={40} onClick={handleModalOpen} />
        </div>
      </S.RequestListWrap>
    </S.RequestChattingWrap>
  );
};

export default RequestChatting;
