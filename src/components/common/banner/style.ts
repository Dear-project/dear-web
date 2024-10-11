import styled from "styled-components";

export const SliderContainer = styled.div`
  width: 80%; 
  max-width: 1000px;
  height: 200px;
  overflow: hidden;
  margin: 0 auto;

  @media (max-width: 768px) {
    height: 150px;
  }
`;

export const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 15px;
  overflow: hidden;

  img {
    object-fit: fill;
  }
`;

export const CustomDots = styled.ul`
  display: flex !important;
  justify-content: center;
  padding: 10px 0;
  list-style: none;
  

  li {
    list-style: none;
  cursor: pointer;
  display: inline-block;
  margin: 0 6px;
  padding: 0;

  }

  li button {
    padding: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #e9e9e9;
    border: none;
  }

  li.slick-active button {
    background-color: #c1c1c1;
  }

  @media (max-width: 768px) {
    li button {
      width: 8px;
      height: 8px;
    }
  }
`;

export const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #e9e9e9;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 8px;
    height: 8px;
  }
`;
