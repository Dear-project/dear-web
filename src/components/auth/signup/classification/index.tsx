import React from "react";
import * as S from "./style";
import TextField from "src/components/common/textField";
import useInfo from "@/hooks/auth/signup/useInfo";

const Classification = () => {
  const { ...hooks } = useInfo();

  return (
    <S.Main>
      <S.SignUpInfolWrap>
        <S.DearLogo>DEAR.</S.DearLogo>
        <S.VerifyWrap> 
                        
        </S.VerifyWrap>
        <S.ButtonWrap>
          <S.BackButton onClick={()=>window.history.back()}>이전</S.BackButton>
          <S.NextButton onClick={hooks.onSignup}>완료</S.NextButton>
        </S.ButtonWrap>
      </S.SignUpInfolWrap>
    </S.Main>
  );
};

export default Classification;
