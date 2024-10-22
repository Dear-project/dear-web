import styled from "styled-components";
import { theme } from "@/styles/theme";


export const chatItem = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  padding: 20px 10px;
  background-color: ${({ isSelected }) => (isSelected ? "#f0f0f0" : "#fff")}; // 선택된 경우 배경색 변경
  cursor: pointer;
  border-radius: 8px;
  margin-bottom: 8px;
img{
    border-radius: 50%;
}
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const chatDetail = styled.div`
    display: flex;  
    flex-direction: column;
    height: 100%;
    width: 200px;
    margin-left: 10px;
    justify-content: space-evenly;

   
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
    position: relative;
    width: 90px;
    height: 100%;
    text-align: center;
    
    span{
        position: absolute;
        top: 4px;
        left: 0px;
        font-size: 10px;
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