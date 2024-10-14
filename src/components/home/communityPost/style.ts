import styled from "styled-components";
import { theme } from "@/styles/theme";

export const CommunityPost = styled.div`
  width: 95%;
  height: 10%;
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

  img {
    border-radius: 50%;
  }
`;