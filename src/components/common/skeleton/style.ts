import { theme } from "@/styles/theme";
import styled from "styled-components";
import { css, keyframes } from "styled-components";

export const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: none;
`;

const skeleton = keyframes`
    0% {
      background-color: ${theme.colors.gray200}
    }
    50% {
      background-color: rgba(182, 182, 182, 0.25);
    }
    100% {
      background-color: rgba(182, 182, 182, 0.1);
    }
`;

export const skeletonAnimtaion = css`
  animation: ${skeleton} 1s infinite ease-in-out;
`;

export const SkeletonItem = styled.div<{ height: number }>`
  width: 100%;
  border: none;
  border-radius: 20px;
  height: ${(props) => props.height}px;

  display: flex;

  background: white;

  padding: 10px;

  img {
    margin-right: 20px;

    border: none;
    border-radius: 20px;
  }
`;

export const SkeletonDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  justify-content: center;
  align-items: flex-start;
`;

export const SkeletonName = styled.div`
  width: 350px;
  height: 40px;
  ${skeletonAnimtaion};
`;

export const SkeletonContent = styled.div`
  width: 1030px;
  height: 60px;
  ${skeletonAnimtaion};
`;
