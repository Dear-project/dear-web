import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Matching = styled.div`
display: flex;
padding: 5px 25px;
justify-content: space-between;
align-items: flex-start;
align-self: stretch;
`
export const TitleBox = styled.div`
display: flex;
width: 249.75px;
height: 75px;
align-items: center;
gap: 15px;
img{
width: 75px;
height: 75px;
flex-shrink: 0;
border-radius: 5px;
border: 1px solid #D1D1D1;
}
`
export const TitleDetail = styled.div`
display: flex;
width: 159.75px;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap:  4px;

flex-shrink: 0;
p{
font-size: 14px;
font-style: normal;
font-weight: 700;
}
span{
color: ${theme.colors.gray600};
font-size: 12px;
font-style: normal;
font-weight: 400;
}
`
export const ApproveBox = styled.div`
display: flex;
width: 119px;
height: 75px;
padding: 10px 5px;
flex-direction: column;
justify-content: space-between;
align-items: center;
div{
    cursor: pointer;
}
.blueButton{
display: flex;
height: 25px;
padding:  4px 7px;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
align-self: stretch;
border-radius: 5px;
background:  ${theme.colors.lightBlue};
}
.redButton{
display: flex;
height: 25px;
padding:  4px 7px;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
align-self: stretch;
border-radius: 5px;
background:  ${theme.colors.lightRed};
}

`
