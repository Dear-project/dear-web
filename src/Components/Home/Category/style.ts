import styled from "styled-components";

export const Main = styled.div`
  background-color: #f4f5f9;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  /* height: 100vw; */
  /* position: absolute; */
`;
export const List = styled.div`
  width: 60%;
  display: inline-flex;
  align-items: flex-start;
  justify-content: center;
  gap: 40px;
`;
export const Button = styled.button`
  display: flex;
  width: 100%;
  height: 30px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  font-size: auto;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.5);
  justify-content: space-around;
  text-align: center;
  align-items: center;
`;
