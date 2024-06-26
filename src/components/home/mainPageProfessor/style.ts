import styled from "styled-components";

export const FindProfessorWrap = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const TitleHolder = styled.div`
  width: 80%;
  height: 10%;
  display: flex;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 24px;
  display: flex;
  align-items: flex-start;
`;

export const Main = styled.main`
  width: 80%;
  height: 80%;

  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;

  border: none;
  border-radius: 10px;

  overflow: scroll;
`;

export const ProfessorWrap = styled.div`
  width: 90%;
  height: 15%;

  border: 1px solid #e4e4e4;

  display: flex;

  align-items: center;

  &:nth-child(1) {
    margin-top: 20px;
  }

  img {
    margin-left: 10px;
    height: 90%;
  }

  gap: 30px;
`;

export const ProfessorInfo = styled.div`
  width: 400px;
  height: 70%;

  display: flex;
  flex-direction: column;

  gap: 35px;

  span {
    font-size: 24px;
    font-weight: 700;
  }
`;

export const ProfessorInfoWrap = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfessorSubAndSkills = styled.div`
  width: 100%;
  height: 50%;

  display: flex;

  span {
    font-size: 16px;
    font-weight: 700;

    color: #aaaaaa;
  }

  div {
    width: 50%;
    height: 100%;

    display: flex;

    span {
      font-size: 14px;
      font-weight: 400;
      color: #787878;
    }
  }
`;

export const BestRecommand = styled.div`
  width: 20%;
  height: 100%;

  display: flex;

  justify-content: flex-end;
`;
