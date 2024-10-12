import { theme } from "@/styles/theme";
import styled from "styled-components";

export const PostDetail = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  padding: 70px 0px 0px 0px;
`;

export const PostWrap = styled.div`
  width: 50%;
  height: 85%;

  background: ${theme.colors.white};
  border: none;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
`;

export const WriterInfo = styled.div`
  width: calc(100% - 100px);
  height: calc(10% - 72px);

  padding: 36px 50px;
  display: flex;
  gap: 10px;
  align-items: center;

  img {
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;

    h1 {
      color: ${theme.colors.black};
      font-size: 23px;
      font-weight: ${theme.fontWeight.bold};
    }
    span {
      columns: ${theme.colors.gray600};
      font-size: 16px;
      font-weight: 700;
    }
  }
`;

export const ContentWrap = styled.div`
  width: calc(100% - 100px);
  height: calc(90% - 72px);

  padding: 36px 50px;

  h1 {
    color: ${theme.colors.black};
    font-size: 33px;
    font-weight: ${theme.fontWeight.bold};
  }

  span {
    color: ${theme.colors.black};
    font-size: 28px;
    font-weight: ${theme.fontWeight.normal};
  }

  img {
    border: none;
    border-radius: 30px;
  }
`;

export const CommentWrap = styled.div`
  width: 30%;
  height: 50%;

  background: ${theme.colors.white};

  display: flex;
  flex-direction: column;

  padding: 29px 30px;

  gap: 10px;

  border: none;
  border-radius: 20px;
`;

export const CommentWrapTitle = styled.h1`
  color: ${theme.colors.black};
  font-size: 33px;
  font-weight: ${theme.fontWeight.extrabold};
`;

export const CommentContentWrap = styled.div`
  width: 100%;
  height: 95%;

  border: 1px solid #000;
`;

export const Comment = styled.div`
  width: calc(100% - 44px);
  height: calc(20% - 36px);

  padding: 18px 22px;

  border: 1px solid #000;
`;
