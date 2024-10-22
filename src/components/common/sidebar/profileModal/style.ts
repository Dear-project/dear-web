import Image from "next/image";
import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Boxlayout = styled.div`
  width: 40rem;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 4;
  padding: 30px;
  -webkit-box-align: center;
  align-items: center;
  border-radius: 20px;
  overflow: hidden;
`;

export const Close = styled.svg`
  font-size: 30px;
  transform: rotate(45deg);
  position: absolute;
  top: 20px;
  right: 20px;
  :hover&& {
    cursor: pointer;
  }
`;
export const ProfileTextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  gap: 10px;
  border-bottom: 1px solid rgb(189, 189, 189);
`;
export const ProfileFix = styled.span`
  font-size: 1.7rem;
  color: var(--Black, #000);
  font-weight: 700;
`;
export const ProfileText = styled.span`
  font-size: 1rem;
  color: var(--Black, #000);
  font-weight: 500;
  margin-bottom: 10px;
`;

export const ProfileImgBox = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 0px;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  border-bottom: 1px solid rgb(189, 189, 189);
`;
export const ProfileImgText = styled.span`
  font-size: 1.2rem;
  padding: 10px 0px;
  color: #000;
`;

export const ProfileImgBunddle = styled.div`
  display: flex;
  height: 130px;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
`;

export const ProfileImg = styled.img`
  display: flex;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Label = styled.label`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 53%;
  left: 65%;
  border-radius: 50%;
  border:  2px solid ${theme.colors.white};
  background-color: ${theme.colors.gray300}; 
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
 cursor: pointer;
    img{
      width: 25px;
      height: 25px;
    }
 
`;
export const InputImg = styled.input`
  display: none;
`;
export const ChangeDefultImg = styled.div`
  display: flex;
  font-size: 1rem;
  height: 30px;
  padding: 0px 10px;
  border-radius: 10px;
  -webkit-box-align: center;
  align-items: center;
  background-color: rgb(238, 238, 238);
  margin: 10px 0px;
  color: #000;
`;
export const ChangeInput = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
`;
export const InputText = styled.p`
  color: var(--Black, #000);
  font-size: 20px;
  font-weight: 700;
`;
export const InputBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 20px 0px 10px 10px;
  gap: 10px;
  border-radius: 12px;
 
    span {
      font-size: 1.1rem;
    }

  input {
    color: var(--Black, #000);
    font-size: 20px;
    font-weight: 700;

    background: transparent;

    &:focus {
      outline: none;
    }
  }
`;
export const InputBoxLast = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 40px;
  border-bottom: solid 1px #000;
  border-top: solid 1px #000;
  align-items: center;
  width: 100%;
  height: 80px;
`;
export const SpanChangeInput = styled.span`
  width: 200px;
  font-size: 1rem;
  font-weight: bold;
  color: #000;
`;

export const TextBox = styled.div`
  display: flex;
  width: 700px;
  flex-direction: row;
  justify-content: center !important;
`;

export const FixBtn = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 10px;
  border: none;
  background: var(--Gray100, #f4f5f9);
  font-size: 18px;
  font-weight: 600;
  color: #000;
  :hover&& {
    cursor: pointer;
  }
`;
export const FixEnd = styled.button`
  display: flex;
  padding: 10px 15px;
  border-radius: 50px;
  background: var(--primary-900, #708fff);
  color: rgb(255, 255, 255);
  font-size: 1.1rem;
  width: min-content;
  white-space: nowrap;
  margin-top: 15px;
  border: none;
  :hover&& {
    cursor: pointer;
  }
`;

//next Image 스타일 맥이는 법
export const ProfileImage = styled(Image)``;
