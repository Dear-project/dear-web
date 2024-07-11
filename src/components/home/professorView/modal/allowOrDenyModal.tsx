import React from "react";
import * as S from "./style";
import useMain from "@/hooks/professorView/mainPage/useMain";

const AllowOrDenyModal = () => {
  const { ...modal } = useMain();
  return (
    <>
      {modal.isClick === true && (
        <S.ModalWrap>
          <span>승인</span>
          <div></div>
          <p>거절</p>
        </S.ModalWrap>
      )}
    </>
  );
};

export default AllowOrDenyModal;
