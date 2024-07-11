import { theme } from "@/styles/theme";
import styled from "styled-components";

export const ProfessorMainViewWrap = styled.div`
  width: calc(100 - 250px);
  height: 100vh;

  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const Main = styled.div`
  width: 90%;
  height: 80%;

  display: flex;
  justify-content: space-around;
`;

export const ProfessorRankWrap = styled.div`
  width: 43%;
  height: 60%;

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

export const ProfessorListWrap = styled.div`
  width: 100%;
  height: 80%;

  padding-left: 0;

  display: flex;
  flex-direction: column;
  gap: 20px;

  align-items: flex-start;
`;

export const Professor = styled.div`
  width: 60%;
  height: 40%;

  display: flex;
  align-items: center;

  gap: 10px;

  div {
    width: 80%;
    height: 80%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    gap: 5px;

    h1 {
      font-size: 1.2rem;
      font-weight: ${theme.fontWeight.bold};
    }

    span {
      font-size: 1.1rem;
      font-weight: ${theme.fontWeight.regular};
      color: ${theme.colors.gray600};
    }
  }
`;
