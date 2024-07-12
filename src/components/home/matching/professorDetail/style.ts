import { theme } from "@/styles/theme";
import styled from "styled-components";

export const ProfessorDetailWrap = styled.div`
  width: 100%;
  height: 100vh;

  max-width: 1920px;
  max-height: 1080px;

  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const Main = styled.div`
  width: 90%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 60px;
`;

export const ProffesorInfoWrap = styled.div`
  width: 80%;
  height: 20%;

  border-radius: 50px;
  background: #fff;

  display: flex;

  align-items: center;

  justify-content: space-between;

  div {
    display: flex;
    gap: 20px;

    position: relative;

    img {
      margin-left: 20px;
      border-radius: 50%;
    }

    align-items: center;
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      position: relative;

      h1 {
        font-size: 2.5rem;
        font-weight: ${theme.fontWeight.bold};
      }
      span {
        font-size: 1.6rem;
        font-weight: ${theme.fontWeight.semibold};
        color: ${theme.colors.gray500};
      }

      img {
        position: absolute;
        left: 80%;

        bottom: 80%;
      }
    }
  }
`;

export const ChatButton = styled.button`
  width: 17%;
  height: 35%;

  background: ${theme.colors.new};

  border-radius: 15px;

  padding: 2%;
  margin-right: 3%;

  display: flex;
  font-size: 1.6rem;
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.colors.white};

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CarrerAndReviewWrap = styled.div`
  width: 100%;
  height: 60%;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  justify-content: space-evenly;
`;

export const CarrerWrap = styled.div`
  width: 34%;
  height: 55%;

  border-radius: 2.5rem;
  background: ${theme.colors.white};

  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: space-evenly;

  padding-left: 1%;
  h1 {
    font-size: 35px;
    font-weight: ${theme.fontWeight.extrabold};
  }
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    div {
      width: 90%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      span {
        font-size: 1.2rem;
        font-weight: ${theme.fontWeight.semibold};
        &:nth-child(2) {
          display: flex;
          align-self: flex-start;
        }
      }
    }
  }
`;

export const ReviewWrap = styled.div`
  width: 35%;
  height: 80%;

  border-radius: 40px;
  background: ${theme.colors.white};

  h1 {
    font-size: 35px;
    font-weight: ${theme.fontWeight.extrabold};
  }
`;
