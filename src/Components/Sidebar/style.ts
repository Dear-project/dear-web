import styled from "styled-components";

export const Side = styled.div`
  margin: 0;
  position: relative;
  background: var(--Gray200, #f1f1f1);
  width: 250px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
export const Logo = styled.div`
  display: flex;
  font-size: 40px;
  font-weight: 800;
  font-family: Pretendard;
  font-style: normal;
  color: var(--New, #0e2764);
  background: none;
  justify-content: center;
  height: 10%;
  align-items: center;
`;
export const Option = styled.div`
  height: 60%;
  gap: 10%;
  display: flex;
  flex-direction: column;
  background: none;
`;
export const Select = styled.div`
  background: none;
  font-size: 25px;
  font-family: Pretendard;
  font-weight: 500;
  color: var(--New, #0e2764);
  display: flex;
  margin-left: 10%;
  align-items: flex-start;
`;
export const My = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
`;

export const Name = styled.div`
  color: var(--Black, #000);
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const School = styled.div`
  color: var(--Gray500, #aaa);
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const Profile = styled.img`
  width: 50px;
  height: 50px;
  object-fit: fill;
  border-radius: 100%;
`;
