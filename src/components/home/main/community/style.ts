import styled from "styled-components";

export const CommunityBox = styled.div`
display: flex;
width: 320px;
height: 320px;
padding:16px 21px;
overflow: hidden;
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
.slick-list {
 margin-right: -22px;
}
.slick-slide {	padding-right: 22px;}
  .slick-initialized {
    width: 100%;
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