import styled from "styled-components";

export const MainBox = styled.div`
display: flex;
width: 90%;
height: 27%;
padding: 19px 0px;
flex-direction: column;
align-items: center;
gap: 13px;
border-radius: 20px;
background: #FFF;
`
export const CommunityMainHeader=styled.div`
display: flex;
padding: 10px 75px;
justify-content: space-between;
align-items: center;
align-self: stretch;
span{
font-size: 20px;
font-weight: 800;
}
`
export const CommunityMainContents = styled.div`
display: flex;
padding: 10px 40px;
justify-content: center;
align-items: flex-start;
gap: 17px;
height: 300px;
flex: 1 0 0;
align-self: stretch;
.slick-list {
 margin-right: -22px;
}
.slick-slide {	padding-right: 22px;}
  .slick-initialized {
    width: 50%;
    height: 320px;
  }

  .slick-slide {
    width: 100%;
  }

  .slick-track {
    display: flex;
  }
    .slick-active {
    text-decoration: none;
  }
`