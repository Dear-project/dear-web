import styled from "styled-components";

export const TextField = styled.div`
  width: 100%;
  height: 45px;

  border: none;
  border-bottom: 1px solid #d1d1d1;

  position: relative;
  border-bottom: 1px solid #d1d1d1;
  label {
    position: absolute;
    left: 2%;
    top: 50%;

    font-size: 1.3rem;

    transform: translateY(-90%);
    transition: all 0.2s ease;
    pointer-events: none;
  }

  input:is(:focus, :valid) ~ label {
    font-size: 1rem;
    transform: translateY(-250%);
  }
`;

export const TextFieldInput = styled.input`
  width: 100%;
  height: 45px;

  color: var(--Gray600, #787878);
  font-family: Assistant;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 200;
  border: none;
  
  outline: none;
  padding-left: 3%;

  font-size: 18px;
  font-family: Assistant;

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #fff inset;
    -webkit-text-fill-color: #000;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }

  &:focus {
    border: none;
  }
`;

export const ErrorText = styled.span`
  color: rgba(255, 10, 10);
  font-family: Assistant;

  display: flex;
  align-self: flex-start;

  margin-left: 75px;
  margin-top: -30px;
`;
