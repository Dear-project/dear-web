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

export const LoginWrap = styled.div`
  min-width: 620px;
  min-height: 630px;
  width: 620px;
  height: 630px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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

export const Input = styled.input`
  width: 485px;
  height: 45px;

  border: none;
  border-bottom: 1px solid #d1d1d1;

  color: var(--Gray600, #787878);
  font-family: Assistant;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 200;

  &:focus {
    outline: none;
  }
`;

export const KeepLoginWrap = styled.div`
  width: 105px;
  height: 20px;

  display: flex;
  gap: 10px;
`;

export const KeepLoginBtn = styled.input`
  width: 20px;
  height: 20px;

  border-radius: 5px;
  border: 1px solid var(--Gray600, #787878);
`;

export const Span = styled.span`
  color: var(--Gray600, #787878);
  font-family: Assistant;
  font-size: 15px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;

  cursor: pointer;
`;

export const LoginButton = styled.button`
  width: 480px;
  height: 55px;

  border-radius: 10px;
  background: var(--New, #0e2764);

  color: var(--White, #fff);
  font-family: Assistant;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  cursor: pointer;

  &:disabled {
    background-color: #d1d1d1;
  }
`;

export const LoginUtilsWrap = styled.div`
  width: 485px;
  height: 20px;

  display: flex;
  justify-content: space-between;
`;

export const FindWrap = styled.div`
  width: 40%;
  height: 100%;
  display: flex;

  gap: 10px;
`;

export const Line = styled.div`
  width: 1px;
  height: 20px;

  background: var(--Gray600, #787878);
`;

export const ErrorMessageWrap = styled.div`
  color: var(--red-500, #f90707);
  font-family: Assistant;
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  width: 100%;
  margin-left: 8vw;
  margin-top: -4vh;
`;
