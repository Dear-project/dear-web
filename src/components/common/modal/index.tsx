import { ModalProps } from "./type";
import styled, { CSSObject } from "styled-components";
import { Portal } from "../modalPortal";
const Modal = ({ width, height, zIndex, isOpen, close, children, customStyle }: ModalProps) => {
  return (
    <Portal>
      {isOpen && (
        <Background onClick={close} customStyle={customStyle}>
          {children}
        </Background>
      )}
    </Portal>
  );
};
export default Modal;
const Background = styled.div<{ customStyle?: CSSObject }>`
  width: 100%;
  min-height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  overflow: auto;
  ${({ customStyle }) => customStyle}
`;
const ModalHeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 53px;
  border-bottom: 1px solid rgb(221, 221, 221);
`;
const Title = styled.h1`
  font-size: 17px;
  font-weight: bold;
`;
