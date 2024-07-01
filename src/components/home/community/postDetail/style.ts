import styled from "styled-components";

export const PostDetail = styled.div`
  width: calc(100vw - 250px);
  height: 100vh;

  display: flex;
  background: #f4f3f9;
`;

export const Main = styled.div`
  width: 1250px;
  height: 95%;
  background: white;

  margin: 0 auto;

  border: none;
  border-radius: 30px 30px 0px 0px;

  display: flex;
  flex-direction: column;
  align-self: center;

  justify-content: space-evenly;

  padding-left: 40px;
`;

export const WriterInfo = styled.div`
  width: 100%;
  height: 60px;

  display: flex;

  background: transparent;
  align-items: center;

  img {
    width: 60px;
    height: 60px;
    margin-right: 1vw;
  }

  div {
    display: flex;
    flex-direction: column;

    gap: 10px;
  }

  h1 {
    color: var(--Black, #000);
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  span {
    color: var(--Gray600, #787878);
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const Content = styled.h1`
  color: var(--Black, #000);
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const CommentWrap = styled.div`
  width: 100%;
  height: 30%;

  background: white;

  /* overflow: scroll; */

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
`;

export const Comments = styled.div`
  width: 95%;
  height: 100%;

  display: flex;
  flex-direction: column;

  overflow-y: scroll;

  p {
    padding-top: 20px;
  }
`;

export const Comment = styled.div`
  width: 99%;
  height: 34%;

  padding-left: 1%;
  padding-top: 1%;
  padding-bottom: 1%;

  display: flex;

  gap: 10px;

  border: none;
  border-bottom: 1px solid #d1d1d1;

  img {
    width: 45px;
    height: 45px;
  }
`;

export const CommentContentWrap = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: var(--Black, #000);
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  span {
    color: var(--Black, #000);
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
