import { link } from "fs";
import styled, { keyframes } from "styled-components";

export const Write = styled.div`
  width: calc(100vw - 250px);
  height: 100vh;

  display: flex;

  background: #f4f5f9;
`;

export const Main = styled.div`
  width: 1100px;
  height: 100%;

  background: white;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  margin: 0 auto;

  border: none;
  border-radius: 15px;

  gap: 10px;
`;

export const TitleIinput = styled.input`
  width: 90%;
  height: 5%;

  border: none;

  margin-top: 3%;

  border: none;
  border-bottom: 1px solid #000;

  padding-bottom: 10px;

  font-family: Pretendard;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;

  &::placeholder {
    color: var(--Gray500, #aaa);

    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
  }

  &:focus {
    outline: none;
  }
`;

export const ContentInput = styled.textarea`
  width: 90%;
  height: 95%;

  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;

  resize: none;

  border: none;

  &::placeholder {
    color: var(--Gray500, #aaa);

    font-size: 1.7rem;
    font-style: normal;
    font-weight: 600;
  }

  &:focus {
    outline: none;
  }
`;

export const UpAnimate = keyframes`
  0% {
    opacity: 0;
  } 100% {
    opacity: 1;
  }
`;

export const DownAnimate = keyframes`
  0% {
    opacity: 1;
  } 100% {
    opacity: 0;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 90%;
  left: 92%;

  cursor: pointer;

  div {
    position: absolute;
    left: 10%;

    transform: translateY(-100%);

    img {
      animation: ${UpAnimate} 0.4s linear;
      margin-bottom: 50px;
    }
  }
`;

export const Button = styled.img<{ $isclicked: string }>`
  animation: ${({ $isclicked }) => ($isclicked === "true" ? UpAnimate : DownAnimate)} 0.4s linear;
  width: 100px;
  height: 100px;
`;
