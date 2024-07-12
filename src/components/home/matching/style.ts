import styled from "styled-components";

export const FindProfessorWrap = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: flex-end;

  gap: 60px;
`;

export const SearchProfessorWrap = styled.div`
  width: 80%;
  height: 70px;

  display: flex;
  justify-content: flex-end;
`;

export const SearchProfessor = styled.div`
  width: 760px;
  height: 70px;

  display: flex;
  align-items: center;

  border: none;
  border-radius: 20px;

  background: #fff;

  input {
    width: 90%;
    height: 100%;

    border: none;
    border-radius: 20px;

    padding-left: 20px;

    font-size: 1.2rem;

    &:focus {
      outline: none;
    }
  }

  img {
    width: 25px;
    height: 25px;
  }
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
  border-radius: 12px;

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
    border-radius: 12px;
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

export const ProfessorInfoHeader = styled.div`
  width: 100%;
  height: 30%;

  display: flex;
  justify-content: space-between;
`;

export const ProfessorInfoWrap = styled.div`
  width: 20%;
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
`;

export const BestRecommand = styled.div`
  height: 100%;

  display: flex;
`;
