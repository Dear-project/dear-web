import styled from "styled-components";
import { theme } from "@/styles/theme";


export const chatItem = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: ${({ isSelected }) => (isSelected ? "#f0f0f0" : "#fff")}; // 선택된 경우 배경색 변경
  cursor: pointer;
  border-radius: 8px;
  margin-bottom: 8px;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const chatDetail = styled.div`
    display: flex;  
    flex-direction: column;
    height: 100%;
    width: 200px;
    justify-content: space-evenly;
    img{
    width: 40px;
    height: 40px;
    }
   
`
export const chatTitle = styled.div`
display: flex;
gap: 5px;
 span{
    font-size: 16px;
    font-weight: ${theme.fontWeight.bold};
    }
    p{
    color: ${theme.colors.gray500};
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    }

`
export const timeDetail = styled.div`
    display: flex;

    height: 100%;
    
    span{
        padding: 0.9rem;
        font-size: 13px;
        font-weight: ${theme.fontWeight.medium};
    }
`
export const content = styled.div`
    display: flex;
    align-items: center;
    
    span{
        font-size: 12px;
        font-weight: ${theme.fontWeight.medium};
    }
`