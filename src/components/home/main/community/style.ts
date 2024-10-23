import styled from "styled-components";

export const CommunityBox = styled.div`
display: flex;
max-width: 550px;
min-width: 350px;
height: 80%;
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
position: relative;
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

export const ArrowLeft = styled.div`
  position: absolute;
  top: 30%;
  left:-20px;
  z-index: 1;
  @media (min-width: 1500px) {
    width: 30px;
    height: 30px;
    line-height: 30px;
    
  }
  width: 20px;
  height: 20px;
  background-color: #333;
  color: #fff;
  text-align: center;
  line-height: 20px;
  border-radius: 50%;
  cursor: pointer;
  transform: translate(0, -50%);
  &:hover {
    background-color: #555;
  }
`;


export const ArrowRight = styled.div`
  position: absolute;
  top: 30%;
  right: -20px;
  z-index: 1;
  width: 20px;
  height: 20px;
  background-color: #333;
  color: #fff;
text-align: center;
line-height: 20px;
  border-radius: 50%;
  @media (min-width: 1500px) {
    width: 30px;
    height: 30px;
    line-height: 30px;

  }
  cursor: pointer;
  transform: translate(0, -50%);
  &:hover {
    background-color: #555;
  }
`;
