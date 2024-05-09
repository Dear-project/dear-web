import styled from "styled-components";
import Image31 from "../../../asset/Ellipse 31.png";
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
  width: 65vw;
  height: 20vh;
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
export const Button = styled.button`
  width: 100px;
  height: 70px;
  background-image: url(${Image31});
  background-size: cover;
  background-position: center;
`;
