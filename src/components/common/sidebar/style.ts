import styled from "styled-components";

export const Side = styled.div`
  margin: 0;
  z-index: 1;
  position: relative;
  background: var(--White, #fff);
  min-width: 265px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Logo = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  font-style: normal;
  background: none;
  justify-content: center;
  align-items: center;
  img {
    width: 130px;
    height: 50px;
  }
`;

export const Option = styled.div`
  width: 100%;
  height: 60%;
  gap: 8%;
  display: flex;
  flex-direction: column;
  background: none;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    width: 90%;
    height: 53px;
    border-radius: 12px;
  }
`;

export const Select = styled.div<{ isSelected: boolean }>`
  background: ${({ isSelected }) => (isSelected ? "#0e2764" : "transparent")};

  font-family: Pretendard;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 15px;
  width: 90%;
  height: 53px;
  border-radius: 12px;

  & > img {
    margin-left: 30px;
    display: flex;
    width: 30px;
    height: 30px;
  }
  span {
    font-size: 23px;
    font-weight: 700;
    color: ${({ isSelected }) => (isSelected ? "#ffffff" : "#000000")};
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
