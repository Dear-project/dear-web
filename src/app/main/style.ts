import styled from "styled-components";
export const Page = styled.div`
display: flex;
padding: 100px 10px;
gap: 50px;
width: 100%;
height: 100%;
 @media (max-width: 1264px) {
    flex-direction: column; 
  }
`
export const SidePage = styled.div`
  width: 100%;
  height: 100vh;
  background-color: aqua;
    @media (max-width: 1264px) {
    height: auto; 
  }
`;
export const MainView  = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: auto;
`
export const MainBox = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: space-around;
`
export const MatchingBox = styled.div`
display: flex;
display: flex;
padding: 49px 0px;
justify-content: space-between;
align-items: center;
`
