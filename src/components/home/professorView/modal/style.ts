import { theme } from "@/styles/theme";
import styled from "styled-components";

export const ModalWrap = styled.div`
  width: 120px;
  height: 80px;

  position: fixed;

  border-radius: 12px;

  background: ${theme.colors.white};

  left: 92vw;
  top: 285px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  div {
    border: 1px solid #d9d9d9;
    width: 95%;
  }

  span {
    font-size: 1.2rem;
    border-top: 1px solid #d9d9d9;
    color: ${theme.colors.black};
  }

  p {
    font-size: 1.2rem;
    font-weight: ${theme.fontWeight.medium};
    color: ${theme.colors.red500};
  }
`;
