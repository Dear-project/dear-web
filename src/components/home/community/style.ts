import { theme } from "@/styles/theme";
import styled from "styled-components";

export const CommunityWrap = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.div`
  width: 90%;
  height: 70%;

  padding: 49px 0px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Community = styled.div`
  width: 55%;
  height: 100%;

  background: ${theme.colors.white};
  border: none;
  border-radius: 20px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;

export const TitleWrap = styled.div`
  width: 85%;
  height: 10%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: ${theme.colors.black};
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: ${theme.fontWeight.extrabold};
  }

  button {
    width: 155px;
    height: 35px;

    border: none;
    border-radius: 5px;

    background: ${theme.colors.new};
    color: ${theme.colors.white};
    font-size: 13px;
    font-weight: ${theme.fontWeight.semibold};
    cursor: pointer;
  }

  img {
    width: 14px;
    height: 14px;
  }
`;

export const CommunityPostWrap = styled.div`
  width: 90%;
  height: 650px;
  display: flex;
  flex-direction: column;

  gap: 17px;

  align-items: center;

  overflow-y: auto;
`;

export const CommunityPost = styled.div`
  width: 95%;
  height: 25%;
  padding: 15px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border: 1px solid ${theme.colors.gray600};
  border-radius: 16px;
  background: inherit;
`;

export const Title = styled.h1`
  color: ${theme.colors.black};
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: ${theme.fontWeight.semibold};
`;

export const TimeStamp = styled.span`
  color: ${theme.colors.gray600};
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: ${theme.fontWeight.medium};
`;

export const Description = styled.div`
  color: ${theme.colors.black};
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: ${theme.fontWeight.medium};
  white-space: break-spaces;
`;

export const PostInfo = styled.div`
  display: flex;
  width: 212px;
  height: 45px;
  justify-content: space-evenly;
  align-items: center;

  margin-top: 8%;

  span {
    color: ${theme.colors.gray600};
    text-align: center;
    font-size: 17px;
    font-weight: ${theme.fontWeight.medium};
  }
`;

export const MyPostWrap = styled.div`
  width: 40%;
  height: 60%;

  background-color: white;

  border: none;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  overflow-y: auto;
`;

export const MyPost = styled.div`
  display: flex;
  width: 80%;
  height: 70%;
  padding: 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const PostWrap = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 15px;
  gap: 10px;

  border: 1px solid #000;
  border-radius: 16px;
`;
