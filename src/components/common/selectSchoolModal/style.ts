import { theme } from "src/styles/theme";
import styled from "styled-components";
import Checked from "@/asset/checked.svg";

export const SelectSchoolModalWrap = styled.div`
  width: 100%;
  height: 100vh;

  position: absolute;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.2);
`;

export const Main = styled.div`
  width: 60%;
  height: 60%;

  border: none;
  border-radius: 20px;

  background: #fff;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-around;
`;

export const SelectWrap = styled.div`
  width: 90%;
  height: 60%;

  padding: 2%;

  display: flex;
  justify-content: space-around;
`;

export const SchoolTypeSelectionWrap = styled.div`
  width: 40%;
  height: 70%;

  border: 1px solid #c5d0da;

  border-radius: 16px;

  border-collapse: collapse;

  div {
    width: 98%;
    height: 30%;

    border-bottom: 1px solid #c5d0da;
    border-radius: 16px;

    display: flex;
    align-items: center;

    font-weight: ${theme.fontWeight.medium};
    color: ${theme.colors.gray600};
    font-size: 16px;

    padding-left: 2%;
  }
`;

export const RadioButtonBox = styled.div`
  width: 98% !important;
  height: 70% !important;

  border: 1px solid #c5d0da;

  display: flex;
  flex-direction: column;

  div {
    border: none !important;
    display: flex;
    gap: 10px;
    input[type="radio"] {
      width: 25px;
      height: 25px;
    }
  }
`;

export const SchoolSelectionWrap = styled.div`
  width: 40%;
  height: 100%;

  div:nth-child(1) {
    width: 100%;
    height: 20%;
    border: 1px solid #c5d0da;
    border-radius: 16px;

    display: flex;
    align-items: center;
    justify-content: center;

    input {
      width: 80%;
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
  }
`;

export const SchoolWrap = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
  padding-top: 5%;
  padding-left: 5%;

  overflow-y: scroll;

  gap: 20px;

  div {
    width: 100%;
    height: 20%;

    display: flex;
    flex-direction: column;
    gap: 10px;
    border: none !important;
    border-radius: 0 !important;

    padding-left: 2%;

    span {
      display: flex;
      align-self: flex-start;

      &:nth-child(1) {
        color: ${theme.colors.gray600};
        font-size: 18px;
        font-weight: ${theme.fontWeight.medium};
      }

      &:nth-child(2) {
        color: ${theme.colors.gray600};
        font-size: 14px;
        font-weight: ${theme.fontWeight.light};
      }
    }
  }
`;

export const NextButton = styled.button`
  width: 30%;
  height: 100%;

  background: ${theme.colors.new};
  color: ${theme.colors.white};
  font-weight: ${theme.fontWeight.semiBold};
  font-size: 20px;

  border: none;
  border-radius: 12px;
`;
