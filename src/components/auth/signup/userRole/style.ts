import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--Gray100, #f4f5f9);
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
`;
export const UserExplanation = styled.div`
display: flex;
  width: 100%;
  height: 30px;
  justify-content: center;
  span{
font-family: Pretendard;
font-size: 22px;
font-style: normal;
font-weight: 700;
line-height: normal;
  }
`

export const UserRoleEmailWrap = styled.div`
  width: 500px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  gap: 20px;
  justify-content: space-around;
  border-radius: var(--Large, 12px);
  background: ${theme.colors.white};
  box-shadow: 4px 4px 8px 0px var(--Gray300, #e6e6e6);
`;

export const DearLogo = styled.h1`
  margin-top: 50px;
  color: var(--Black, #000);
  font-family: Assistant;
  font-size: 4rem;
  font-style: normal;
  font-weight: 800;
`;

export const VerifyWrap = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const UserCheckBox = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 200px;
  border-radius: 10px;
  border: 1px solid ${theme.colors.new};
  background: ${(props) =>
    props.selected ?  theme.colors.primary800 : theme.colors.gray100};
  cursor: pointer;
  span{
    margin-top: 10px;
font-family: Pretendard;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
  }
`;

export const ButtonWrap = styled.div`
  width: 100%;
  height: 50px;
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
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: ${(props) => (props.disabled ? "#ebefff" : "#1d2d44")};
  color: #fff;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
