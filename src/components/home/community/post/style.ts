import styled from "styled-components";

export const Post = styled.div`
  display: flex;

  width: 100%;
  max-width: 1280px;
  height: 140px;
  padding: 10px;
  align-items: flex-start;

  border: none;
  border-radius: 20px;

  background: white;

  img {
    width: 130px;
    height: 130px;
  }

  cursor: pointer;
`;

export const ContentWrap = styled.div`
  width: 90%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
`;

export const PostTtile = styled.h1`
  color: var(--Black, #000);
  font-family: Pretendard;
  font-size: 27px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const PostContext = styled.span`
  color: var(--Black, #000);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const PostDate = styled.span`
  color: var(--Black, #d1d1d1);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
