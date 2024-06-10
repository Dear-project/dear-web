import styled from "styled-components";

export const TextField = styled.div`
  width: 485px;
  height: 45px;

  border: none;
  border-bottom: 1px solid #d1d1d1;

  label {
    position: absolute;
    left: 37%;
    top: 40%;

    font-size: 1.3rem;

    transform: translateY(-90%);
    transition: all 0.2s ease;
    pointer-events: none;
  }

  input:is(:focus, :valid) ~ label {
    font-size: 1rem;
    transform: translateY(-300%);
  }
`;

export const TextFieldInput = styled.input`
  width: 97%;
  height: 45px;

  color: var(--Gray600, #787878);
  font-family: Assistant;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 200;
  border: none;
  border-bottom: 1px solid #d1d1d1;
  outline: none;
  padding-left: 3%;

  font-size: 18px;
  font-family: Assistant;

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
