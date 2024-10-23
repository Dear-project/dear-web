import styled from "styled-components";

export const MatchingBox = styled.div`
background-color: #fff;
display: flex;
min-width:40rem;
height: 90%;
padding: 19px 0px;
flex-direction: column;
align-items: center;
gap: 13px;
flex-shrink: 0;
border-radius: 20px;
`
export const Header = styled.div`
display: flex;
min-width: 15rem;
padding: 10px 30px;
justify-content: space-between;
align-items: center;
align-self: stretch;

span{
font-size: 20px;
font-weight: 800;
}
`
export const Content = styled.div`
display: flex;
flex-direction: column;
overflow: hidden;
overflow-y: scroll;
gap: 13px;
width: 100%;
height: 100%;
`