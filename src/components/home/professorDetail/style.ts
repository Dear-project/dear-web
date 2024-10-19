import { theme } from "@/styles/theme";
import styled from "styled-components";

export const ProfessorDetailWrap = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.div`
  width: 80%;
  height: 70%;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Professor = styled.div`
  width: calc(40% - 50px);
  height: 40%;
  padding: 0px 25px;

  background: ${theme.colors.white};

  display: flex;
  align-items: center;
  gap: 20px;

  border: none;
  border-radius: 30px;

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;

    h1 {
      color: ${theme.colors.black};
      font-size: 30px;
      font-weight: ${theme.fontWeight.bold};
    }

    span {
      color: ${theme.colors.gray500};
      font-size: 20px;
      font-weight: ${theme.fontWeight.semibold};
    }
  }
`;

export const InfoWrap = styled.div`
  width: calc(50% - 112px);
  height: calc(90% - 64px);
  padding: 32px 56px;

  display: flex;
  flex-direction: column;
  gap: 25px;

  background: ${theme.colors.white};

  border: none;
  border-radius: 50px;

  h1 {
    color: ${theme.colors.black};
    font-size: 25px;
    font-weight: ${theme.fontWeight.semibold};
  }

  div {
    width: 50%;
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: unset !important;
    gap: 20px;

    div {
      width: max-content;
      height: max-content;
      display: flex;
      flex-direction: row;
      width: max-content;

      h4 {
        color: #787878;
        font-size: 20px;
        font-weight: ${theme.fontWeight.semibold};
      }

      span {
        color: ${theme.colors.gray700};
        font-size: 18px;
        font-weight: ${theme.fontWeight.semibold};
      }
    }
  }
`;

export const InfoTitle = styled.h1`
  color: ${theme.colors.black};
  font-size: 30px !important;
  font-weight: ${theme.fontWeight.extrabold} !important;
`;

export const Button = styled.button`
  width: 80%;
  height: 10%;

  background: ${theme.colors.new};

  align-self: center;
  margin-top: auto;

  border: none;
  border-radius: 12px;

  color: ${theme.colors.white};
  font-size: 20px;
  font-weight: ${theme.fontWeight.bold};

  cursor: pointer;
`;
