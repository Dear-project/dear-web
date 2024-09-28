import styled from "styled-components";

import Logo1 from "@/asset/LogoSmall.svg";

export const Side = styled.div<{ isSidebarOpen: boolean }>`
  transition: all 0.3s ease-in-out;

  width: ${({ isSidebarOpen }) => (isSidebarOpen ? "280px" : "72px")}; /* 상태에 따른 크기 변경 */
  
  @media (min-width: 1264px) and (max-width: 1919px) {
    width: ${({ isSidebarOpen }) => (isSidebarOpen ? "280px" : "72px")}; /* 상태에 따른 크기 변경 */
  }

  @media (max-width: 1264px) {
    width: 72px;
  }

  margin: 0;
  z-index: 1;
  position: relative;
  background: var(--White, #fff);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  span {

  }
`;

export const Logo = styled.div<{ isSidebarOpen: boolean }>`
  transition: all 0.3s ease-in-out; 
  height: ${({ isSidebarOpen }) => (isSidebarOpen ? "200px" : "100px")};
  display: flex;
  width: 100%;
  font-style: normal;
  background: none;
  justify-content: center;
  align-items: center;

  img {
    width: ${({ isSidebarOpen }) => (isSidebarOpen ? "130px" : "100%")};
    height: 200px;
    transition: all 0.3s ease-in-out; 
  }
  
  @media (max-width: 1264px) {
    height: 200px; 
    img {
      width: 65px; 
      height: 65px;
    }
  }
`;

export const Option = styled.div<{ isSidebarOpen: boolean }>`
  transition: all 0.3s ease-in-out; /* 메뉴 옵션 변화에 트랜지션 적용 */

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
    justify-content: ${({ isSidebarOpen }) => (isSidebarOpen ? "start" : "center")};
    gap: ${({ isSidebarOpen }) => (isSidebarOpen ? "15px" : "0")};
    width: 90%;
    height: 53px;
    border-radius: 12px;
    transition: all 0.3s ease-in-out; /* 링크 크기와 변화에 트랜지션 적용 */
  }
`;

export const Select = styled.div<{ isSelected: boolean; isSidebarOpen: boolean }>`
  transition: all 0.3s ease-in-out; /* 선택된 항목 변화에 트랜지션 적용 */

  background: ${({ isSelected }) => (isSelected ? "#0e2764" : "transparent")};
  font-family: Pretendard;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: ${({isSidebarOpen})=>(isSidebarOpen ? "start" : "center")};
  gap: 15px;
  width: 100%;
  height: 53px;
  border-radius: 12px;

  & > img {
    margin-left: ${({ isSidebarOpen }) => (isSidebarOpen ? "30px" : "0")}; 
    display: flex;
    width: 30px;
    height: 30px;
    transition: all 0.3s ease-in-out; 
  }

  span {
    display: ${({ isSidebarOpen }) => (isSidebarOpen ? "block" : "none")}; 
    font-size: 23px;
    font-weight: 700;
    color: ${({ isSelected }) => (isSelected ? "#ffffff" : "#000000")};
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 1264px) {
    width: 100%;
    justify-content: center;

    & > img {
      margin-left: 0; 
    }

    span {
      display: none; 
    }
  }
`;

export const Profile = styled.div<{ isSidebarOpen: boolean }>`
  display: flex;
  align-items: center;
  height: 5rem;
  padding: 10px;
  transition: all 0.3s ease-in-out;
  justify-content: ${({ isSidebarOpen }) => (isSidebarOpen ? "flex-start" : "center")};
  @media (max-width: 1264px) {
    padding: 0;
    justify-content: center;
  }
  
`;

export const My = styled.div<{isSidebarOpen: boolean}>`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out; 
img{
  width: ${({isSidebarOpen})=> (isSidebarOpen? 45 : 30)};
  height: ${({isSidebarOpen})=> (isSidebarOpen? 45 : 30)};
}
  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 1264px) {
    justify-content: center; 
    gap: 0;
  }
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in-out; 

  @media (max-width: 1264px) {
    display: none; 
  }
`;

export const Name = styled.div`
  color: var(--Black, #000);
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  opacity: 1;
`;

export const School = styled.div`
  color: var(--Gray500, #aaa);
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  opacity: 1;
`;
