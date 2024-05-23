import styled from "styled-components";

export const Side = styled.div`
  margin: 0;
  position: relative;
  background: var(--White, #fff);
  width: 250px;
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
  gap: 8%;
  display: flex;
  flex-direction: column;
  background: none;
  align-items: center;
`;

export const Select = styled.div<{ isSelected: boolean }>`
  width: 230px;
  height: 50px;
  background: ${({ isSelected }) => (isSelected ? "#0e2764" : "transparent")};
  color: ${({ isSelected }) => (isSelected ? "#ffffff" : "#000000")};
  font-size: 25px;
  font-family: Pretendard;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  outline: none;

  & > img {
    margin-left: 10px;
    outline: none;
  }
`;

export const My = styled.div`
  margin-left: 5%;
  margin-bottom: 5%;
  display: flex;
  width: 100%;
  align-items: flex-end;
  cursor: pointer; /* 추가: hover 시 pointer로 변경 */

  &:hover {
    text-decoration: underline; /* 추가: hover 시 밑줄 효과 */
  }
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

// export const Profile = styled.image`
//   width: 50px;
//   height: 50px;
//   object-fit: fill;
//   border-radius: 100%;
// `;
