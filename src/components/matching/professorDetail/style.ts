import styled from "styled-components";

export const ProfessorDetailWrap = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const Main = styled.div`
  width: 80%;
  height: 100%;

  background: #fff;

  display: flex;
  flex-direction: column;

  align-items: center;

  gap: 100px;
`;

export const InfoWrap = styled.div`
  width: 90%;
  height: 30%;

  display: flex;
  flex-direction: column;

  gap: 10px;
`;

export const UtilityWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 75%;
  align-items: center;
`;

export const ProfileWrap = styled.div`
  width: 40%;
  height: 80%;

  display: flex;
  align-items: center;

  gap: 15px;

  img {
    width: 70px;
    height: 70px;

    padding-left: 20px;
  }

  div {
    display: flex;
    flex-direction: column;

    gap: 10px;

    h1 {
      color: var(--Black, #000);
      font-size: 38px;
      font-weight: 700;
    }

    span {
      color: var(--Gray500, #aaa);
      font-size: 23px;
      font-weight: 600;
    }
  }
`;

export const BestRecommandIcon = styled.div`
  position: absolute;
  top: 3%;
  left: 41%;
`;

export const ButtonWrap = styled.div`
  width: 60%;
  height: 80%;

  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 30%;
    height: 35%;

    border-radius: var(--Large, 12px);
    background: var(--New, #0e2764);

    color: var(--White, #fff);
    font-family: Pretendard;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const OneLiner = styled.span`
  color: var(--Gray500, #aaa);
  font-family: Pretendard;
  font-size: 25px;
  font-weight: 500;

  padding-left: 20px;
`;

export const Subject = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 20px;
    height: 20px;
    background: transparent;

    padding-left: 20px;
  }

  span {
    color: var(--Gray600, #787878);
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const CareerWrap = styled.div`
  width: 83%;
  height: 70%;

  display: flex;
  padding: 20px 38px;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;

  h1 {
    color: var(--Black, #000);
    font-family: Pretendard;
    font-size: 36px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
`;

export const Careers = styled.div`
  width: 40%;
  height: 5%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: var(--Black, #000);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
