import styled from "styled-components";

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--Gray100, #f4f5f9);

  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const SignUpEmailWrap = styled.div`
  min-width: 620px;
  min-height: 630px;
  width: 620px;
  height: 630px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  border-radius: var(--Large, 12px);
  background: var(--White, #fff);
  box-shadow: 4px 4px 8px 0px var(--Gray300, #e6e6e6);
`;

export const DearLogo = styled.h1`
  color: var(--Black, #000);
  font-family: Assistant;
  font-size: 4rem;
  font-style: normal;
  font-weight: 800;
`;

export const VerifyWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export const Span = styled.span`
  font-family: Assistant;
`;

export const Input = styled.input`
  width: 340px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid #d1d1d1;

  color: var(--Gray500, #000);
  font-family: Akshar;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-bottom: 2wvh;

  &:focus {
    outline: none;
  }
`;

export const EmailVerifyWrap = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  margin-top: 1vh;
`;

export const VerifyButton = styled.button`
  width: 180px;
  height: 45px;

  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;

  gap: 10px;

  border-radius: 10px;
  background: var(--primary-400, #1d2d44);
  color: #fff;

  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const ButtonWrap = styled.div`
  width: 485px;
  height: 45px;

  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;

  gap: 10px;
`;

export const BackButton = styled.button`
  display: flex;
  width: 85px;
  height: 50px;
  padding: 11px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 10px;
  background: var(--Primary800, #ebefff);

  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const NextButton = styled.button`
  display: flex;
  width: 240px;
  height: 50px;
  padding: var(--Large, 12px) 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 10px;
  background: var(--primary-400, #1d2d44);
  color: #fff;

  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const ErrorMessageWrap = styled.div`
  color: var(--red-500, #f90707);
  font-family: Assistant;
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  width: 100%;
  margin-left: 16vw;
  margin-top: 1vh;
`;
