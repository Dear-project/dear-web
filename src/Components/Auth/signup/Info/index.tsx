import React from "react";
import * as S from "./style";
import useInfo from "src/Hooks/Auth/signup/Info/useInfo";
import Link from "next/link";
import TextField from "src/Components/common/TextField";

const SignupInfo = ({ onShow }: { onShow: boolean }) => {
  const { ...hooks } = useInfo();

  return (
    <>
      {onShow === true && (
        <S.Main>
          <S.SignUpInfolWrap>
            <S.DearLogo>DEAR.</S.DearLogo>
            <S.VerifyWrap>
              <TextField
                id="text"
                name="name"
                type="text"
                functions="text"
                value={hooks.signupData.name}
                onchange={hooks.handleSignupData}
                labelStyle={{ top: "41%" }}
              >
                이름
              </TextField>
              <div>
                <TextField
                  id="text"
                  name="birthday"
                  type="text"
                  functions="text"
                  labelStyle={{ top: "52%" }}
                  value={hooks.signupData.birthday}
                  onchange={hooks.handleSignupData}
                >
                  생년월일
                </TextField>
              </div>
              <div>
                <TextField
                  id="text"
                  name="type"
                  type="text"
                  functions="text"
                  value={hooks.signupData.type}
                  onchange={hooks.handleSignupData}
                  labelStyle={{ top: "63%" }}
                >
                  분류
                </TextField>
              </div>
            </S.VerifyWrap>
            <S.ButtonWrap>
              <S.BackButton>이전</S.BackButton>
              <S.NextButton onClick={hooks.handleConfirmButton}>완료</S.NextButton>
            </S.ButtonWrap>
          </S.SignUpInfolWrap>
        </S.Main>
      )}
    </>
  );
};

export default SignupInfo;
