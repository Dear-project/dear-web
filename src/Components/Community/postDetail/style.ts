import styled from "styled-components";

export const PostDetail = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
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
  align-self: flex-end;
  align-items: center;
`;

export const WriterInfo = styled.div`
  width: 100%;
  height: 60px;

  display: flex;

  img {
    background: transparent;
  }
`;
