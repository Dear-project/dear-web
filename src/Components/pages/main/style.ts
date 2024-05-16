import styled from "styled-components";

export const Main = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-left: 15%;
  margin-top: 3%;
`;

export const Title = styled.p`
  color: var(--Black, #000);
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.7887rem;
`;
export const professor = styled.div`
  background-color: #fff;
  border-radius: 17px;
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  gap: 2%;
`;
export const List = styled.div`
  margin-top: 2%;
  width: 90%;
  height: 20%;
  border-radius: var(--Large, 12px);
  border: 1px solid #e4e4e4;
  background: var(--White, #fff);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2%;
`;
export const Img = styled.img`
  width: 140px;
  height: 100px;
  border-radius: var(--Large, 12px);
  background: var(--Gray400, #d1d1d1);
  margin-left: 1%;
  object-fit: cover;
`;
export const Bunddle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
`;
export const FontBuddle = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;
export const TextName = styled.p`
  color: var(--Black, #000);
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 117.1%; /* 28.104px */
`;
export const TextBunddle = styled.div`
  display: flex;
  width: 30vw;
  gap: 10%;
`;
export const TextSub = styled.p`
  color: var(--Gray500, #aaa);

  /* Main Text */
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const MiniBunddle = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Sub = styled.div`
  width: 4.375rem;
  height: 1.25rem;
  flex-shrink: 0;
  border-radius: 3px;
  background: #fff6d4;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 5%;
  right: 1%;
`;

export const SubText = styled.p`
  color: #ffbd3c;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;
