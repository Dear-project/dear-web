import { theme } from "@/styles/theme";
import styled from "styled-components";

export const SelectMajorModalWrap = styled.div`
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

  background: ${theme.colors.white};

  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: center;

  gap: 10px;
`;

export const Header = styled.div`
  display: flex;

  width: 70%;
  height: 7%;

  display: flex;
  align-items: flex-start;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  color: ${theme.colors.black};
  font-size: 1.4rem;
  font-weight: ${theme.fontWeight.bold};

  padding-left: 5%;
`;

export const SearchWrap = styled.div`
  width: 60%;
  height: 90%;

  border: 1px solid #c5d0da;
  border-radius: 16px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  input {
    width: 88%;
    height: 100%;

    padding-left: 2%;

    border-radius: 16px;
    font-weight: ${theme.fontWeight.noraml};
    font-size: 1.1rem;
    color: ${theme.colors.black};

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${theme.colors.gray500};
    }
  }
`;

export const MajorBoxWrap = styled.div`
  width: 100%;
  height: 77%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MajorWrap = styled.div`
  width: 95%;
  height: 100%;

  display: flex;

  border: 1px solid ${theme.colors.gray200};
`;

export const MajorTypeWrap = styled.div`
  width: 11%;
  height: 100%;

  padding-left: 2%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;

  background: ${theme.colors.gray200};

  span {
    font-size: 1.1rem;
    font-weight: ${theme.fontWeight.semibold};
    color: ${theme.colors.gray700};

    cursor: pointer;
  }
`;

export const MajorListWrap = styled.div`
  width: 82%;
  height: 98%;

  display: flex;
  flex-wrap: wrap;

  align-items: flex-start;
  justify-content: center;

  padding-left: 2%;
  column-gap: 70px;
`;

export const Major = styled.div`
  width: 18%;
  height: 15%;

  background: ${theme.colors.gray300};
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 1.1rem;
    font-weight: ${theme.fontWeight.bold};
    color: ${theme.colors.black};
  }
`;

export const NextButton = styled.button`
  width: 20%;
  height: 7%;

  background: ${theme.colors.new};
  color: ${theme.colors.white};
  font-weight: ${theme.fontWeight.semiBold};
  font-size: 20px;

  border: none;
  border-radius: 12px;

  cursor: pointer;

  display: flex;
  align-self: flex-end;
  align-items: center;
  justify-content: center;

  margin-right: 2%;
`;
