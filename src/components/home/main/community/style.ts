import styled from "styled-components";

export const CommunityBox = styled.div`
display: flex;
height: 380px;
padding:16px 21px;

flex-direction: column;
align-items: flex-start;
gap: 13px;
border-radius:  20px;
background: #FFF;
`
export const CommunityHeader = styled.header`
display: flex;
padding: 10px 30px;
justify-content: space-between;
align-items: center;
align-self: stretch;
span{
font-size: 20px;
font-style: normal;
font-weight: 800;
}
`
export const CommunityContents = styled.div`
display: flex;
width: 100%;
height: 100%;
justify-content: center;
`