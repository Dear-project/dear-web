import styled from "styled-components";
import { theme } from "@/styles/theme";

export const SelectMajorModalWrap = styled.div`
  width: 100%;
  height: 100vh;

  position: fixed;
  left: 0;
  top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.2);
  z-index: 1;
`;
export const Main = styled.div`
  width: 70%;
  height: 70%;

  border: none;
  border-radius: 20px;

  background: ${theme.colors.white};

  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: space-evenly;

  gap: 10px;
`;