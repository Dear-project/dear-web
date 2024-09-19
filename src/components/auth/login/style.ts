import styled from "styled-components";

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--Gray100, #f4f5f9);
  
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  
`;

export const LoginWrap = styled.div`
  min-height: 400px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  
  border-width: 0px;
  border-style: solid; 
  box-sizing: border-box;
  overflow-wrap: break-word;

@media screen and (min-width: 48em) {
    .login-container {
        padding: 48px;
    }
    }
  border-radius: var(--Large, 12px);
  background: var(--White, #fff);
  box-shadow: 4px 4px 8px 0px var(--Gray300, #e6e6e6);
`;

export const LoginBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 100%;
gap: 30px;
padding: 30px;
`
export const InputBox = styled.div`
display: flex;
flex-direction: column;
gap: 40px;
padding: 10px;
width: 90%;
height: 100%;
margin-bottom: 50px;
`
export const LoginInputBox = styled.div`
  width: 100%;
  height: 45px;

  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const DearLogo = styled.h1`
  margin-top: 50px;
  color: var(--Black, #000);
  font-family: Assistant;
  font-size: 4rem;
  font-style: normal;
  font-weight: 800;
`;

export const Input = styled.input`
  width: 485px;
  height: 45px;

  border: none;
  border-bottom: 1px solid #d1d1d1;

  color: var(--Gray600, #787878);
  font-family: Assistant;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 200;

  &:focus {
    outline: none;
  }
`;


export const Span = styled.span`
  color: var(--Gray600, #787878);
  font-family: Assistant;
  font-size: 15px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;

  cursor: pointer;
`;

export const LoginButton = styled.button`
  width: 90%;
  height: 55px;

  border-radius: 10px;
  background: var(--New, #0e2764);

  color: var(--White, #fff);
  font-family: Assistant;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  cursor: pointer;

  &:disabled {
    background-color: #d1d1d1;
  }
`;

export const LoginUtilsWrap = styled.div`
  width: 485px;
  height: 40px;

  display: flex;
  justify-content: space-between;
`;

export const FindWrap = styled.div`
  width: 40%;
  height: 100%;
  display: flex;

  gap: 10px;
`;

export const Line = styled.div`
  width: 1px;
  height: 20px;

  background: var(--Gray600, #787878);
`;
