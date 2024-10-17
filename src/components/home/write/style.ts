import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Write = styled.div`
  width: calc(100% - 200px);
  height: calc(100vh - 140px);

  padding: 70px 100px;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  position: relative;

  .cute {
    position: absolute;
    top: 60%;
    left: 75%;
  }
`;

export const WriteWrap = styled.div`
  width: calc(100% - 184px);
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TitleWrap = styled.div`
  width: calc(80% - 40px);
  height: calc(8% - 38px);

  background: ${theme.colors.white};

  border: none;
  border-radius: 12px;

  padding: 19px 20px;

  input {
    width: 100%;

    font-size: 24px;
    font-weight: ${theme.fontWeight.normal};
    color: ${theme.colors.black};

    &::placeholder {
      color: "#A4A4B0";
    }

    &:focus {
      outline: none;
    }
  }
`;

export const ContentWrap = styled.div`
  width: calc(80% - 40px);
  height: calc(90% - 38px);
  padding: 19px 20px;

  background: ${theme.colors.white};

  border: none;
  border-radius: 20px;

  textarea {
    width: 100%;
    height: 100%;
    resize: none;

    font-size: 24px;
    font-weight: ${theme.fontWeight.normal};
    color: ${theme.colors.black};

    &::placeholder {
      color: "#A4A4B0";
    }

    &:focus {
      outline: none;
    }
  }
`;

export const ToolsWrap = styled.div`
  width: 45%;
  height: calc(35% - 40px);

  background: ${theme.colors.white};

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  padding: 20px 0px;

  border: none;
  border-radius: 20px;
`;

export const ToolsTitle = styled.div`
  display: flex;
  padding: 0px 39px;
  align-items: center;
  gap: 10px;

  color: ${theme.colors.black};
  font-size: 32px;
  font-weight: ${theme.fontWeight.semibold};
`;

export const ImageWrap = styled.div`
  width: calc(100% - 20px);
  height: calc(80% - 20px);

  padding: 10px;

  div {
    width: calc(100% - 24px);

    display: flex;
    padding: 10px 25px;
    gap: 15px;

    align-items: center;

    h1 {
      color: ${theme.colors.black};
      font-size: 30px;
      font-weight: ${theme.fontWeight.medium};
    }
  }
`;

export const Button = styled.button`
  width: 90%;
  height: 30%;

  border: none;
  border-radius: 12px;

  background: ${theme.colors.new};

  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;

  color: ${theme.colors.white};
  font-size: 32px;
  font-weight: ${theme.fontWeight.medium};
`;
