import styled from "styled-components";
import { theme } from "@/styles/theme";

export const SelectWrap = styled.div`
  width: 100%;
  height: 60%;

  display: flex;
  justify-content: space-around;
`;


export const SchoolTypeSelectionWrap = styled.div<{ $isclicked: string }>`
  width: 40%;
  height: 100%;
  border: ${({ $isclicked }) => ($isclicked === "true" ? "none" : "1px solid #c5d0da")};
  border-radius: 16px;

  div {
    height: 15%;

    border: ${({ $isclicked }) => ($isclicked === "true" ? "1px solid #c5d0da" : "none")};
    border-bottom: ${({ $isclicked }) => ($isclicked === "true" ? "1px solid #c5d0da" : "none")};

    border-radius: 16px;

    display: flex;
    align-items: center;

    font-weight: ${theme.fontWeight.medium};
    color: ${theme.colors.gray600};
    font-size: 16px;

    padding-left: 2%;
  }
  img {
    transition: transform 0.3s ease;
    transform: ${({ $isclicked }) => ($isclicked === "true" ? "rotate(180deg)" : "rotate(0deg)")};
  }
`;

export const RadioButtonBox = styled.div<{ $isvisible: string }>`
  width: 98%;
  height: 100%;

  border: 1px solid #c5d0da;

  display: ${({ $isvisible }) => ($isvisible === "true" ? "flex" : "none")} !important;
  flex-direction: column;

`;

export const SchoolSelectionWrap = styled.div`
  width: 40%;
`;


export const SearchWrap = styled.div`
  width: 100%;
  height: 35px;
  border: 1px solid #c5d0da;
  border-radius: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 100%;
    height: 100%;

    border: none;
    padding-left: 3%;

    color: ${theme.colors.gray600};
    font-size: 17px;

    &:focus {
      outline: none;
    }
  }

  img {
    cursor: pointer;
  }
`;

export const SchoolWrap = styled.div`
  width: 100%;
  height: 90%;
text-align: center;
  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
  padding-top: 5%;

  overflow-y: scroll;

  gap: 20px;
`;

export const SchoolList = styled.div<{ $isclicked: string }>`
  width: 90%;
  height: 20%;
  cursor: pointer;
  display: flex;
  border-radius: 12px;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
  border: none;
  background: ${({ $isclicked }) => ($isclicked === "true" ? theme.colors.gray500 : "none")};

  span {
    display: flex;
    align-self: flex-start;

    &:nth-child(1) {
      color: ${({ $isclicked }) => ($isclicked === "true" ? theme.colors.white : theme.colors.gray600)};
      font-size: 18px;
      font-weight: ${theme.fontWeight.medium};
    }

    &:nth-child(2) {
      color: ${({ $isclicked }) => ($isclicked === "true" ? theme.colors.white : theme.colors.gray600)};
      font-size: 14px;
      font-weight: ${theme.fontWeight.normal};
    }
  }
`;