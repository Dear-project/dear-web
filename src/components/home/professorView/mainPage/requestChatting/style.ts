import { theme } from "@/styles/theme";
import styled from "styled-components";

export const RequestChattingWrap = styled.div`
  width: 43%;
  height: 60%;

  border-radius: 20px;

  padding-left: 2%;

  background: ${theme.colors.white};
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  overflow-y: scroll;

  h1 {
    font-size: 1.5rem;
    color: ${theme.colors.black};
    font-weight: ${theme.fontWeight.bold};
  }
`;

export const RequestListWrap = styled.div`
  width: 100%;
  height: 80%;

  padding-left: 0;

  display: flex;
  flex-direction: column;
  gap: 20px;

  align-items: center;

  div {
    width: 95%;
    height: 20%;

    display: flex;
    align-items: center;

    justify-content: space-evenly;

    background: ${theme.colors.gray100};
    border-radius: 12px;
    cursor: pointer;

    div {
      display: flex;
      flex-direction: column;

      align-items: flex-start;
      justify-content: center;

      width: 60%;
      height: 100%;

      gap: 10px;

      h1 {
        font-weight: ${theme.fontWeight.bold};
        font-size: 1.5rem;
      }
      span {
        font-weight: ${theme.fontWeight.bold};
        font-size: 1.1rem;
      }
    }
  }
`;
