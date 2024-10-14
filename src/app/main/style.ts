import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  padding: 100px 10px;
  gap: 50px;
  width: 100%;
  height: 100%;
 
  @media (max-width: 1264px) {
    flex-direction: column;
    overflow-y: scroll;
    padding: 50px 5px;  
    gap: 20px;  
  }
`;

export const SidePage = styled.div`
  width: 100%;
  height: 100vh;
  background-color: aqua;

  @media (max-width: 1264px) {
    height: auto;
    background-color: lightblue; 
  }
`;

export const MainView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const MainBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;  
    gap: 20px;  
  }
`;

export const MatchingBox = styled.div`
  display: flex;
  padding: 49px 0px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 0px;  
  }
`;
