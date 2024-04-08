import React from "react";
import * as S from "./style";
import useInfo from "src/Hooks/Auth/signup/Info/useInfo";

const SignupInfo = () => {
  const { ...hooks } = useInfo();

  return (
    <S.Main>
      <S.SignUpInfolWrap>
        <S.DearLogo>DEAR.</S.DearLogo>
        <S.VerifyWrap>
          <S.Input type="text" placeholder="이름" value={hooks.name} onChange={hooks.handleChangeName} />
          <S.Input
            type="text"
            placeholder="생년월일"
            style={{ marginTop: "1vh" }}
            value={hooks.birthday}
            onChange={hooks.handleChangeBirthday}
          />
        </S.VerifyWrap>
        <S.ButtonWrap>
          <S.BackButton>이전</S.BackButton>
          <S.NextButton>완료</S.NextButton>
        </S.ButtonWrap>
      </S.SignUpInfolWrap>
    </S.Main>
  );
};

export default SignupInfo;
