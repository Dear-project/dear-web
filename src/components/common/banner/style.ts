import styled from "styled-components";

export const SliderContainer = styled.div`
  width: 100%;
  height: 20vh;
  max-width: 900px;
  margin: 2vw auto 0 auto;
`;

export const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledImageWrapper = styled.div`
  width: 100%;
  height: 20vh;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  img {
    object-fit: fill;
  }
`;

export const Main = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const Banner = styled.div`
  border-radius: 17px;
  background: var(--New, #0e2764);
  width: 80%;
  height: 20vh;
  margin-top: 3%;
  display: flex;
  justify-content: space-between;
`;

export const Textbunddle = styled.div`
  margin-left: 8%;
  margin-top: 1%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const Text = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Text1 = styled.div`
  color: #fff;
  font-family: Assistant;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;
export const ButtonWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 70px;
  margin-right: 8%;
  margin-top: 8%;
`;

export const ButtonText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #000;
  font-family: Assistant;
  font-size: 0.875rem;
  font-weight: 800;
`;

export const Button = styled.button`
  all: unset;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
