import styled from "styled-components";
import { theme } from "@/styles/theme";

export const chatList  = styled.div`
display: flex;
flex-direction: column;
height: 100%;
padding: 10px;
gap: 10px;
`
export const chatItem = styled.div`
display: flex;
width: 281px;
height: 67px;
justify-content: space-around;
align-items: center;
img{
    width: 50px;
    height: 50px;
}

`
export const chatDetail = styled.div`
    display: flex;  
    flex-direction: column;
    height: 100%;
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