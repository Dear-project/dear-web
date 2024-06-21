import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #f5f5f5;

  overflow-y: hidden;
`;

export const Wrap = styled.div<{ isSign: boolean }>`
  width: 100%;
  height: 100%;
`;
