import styled from "styled-components";


export const chatContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  gap: 20px;
`;

export const chatRoom = styled.div`
  flex-grow: 1;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const chatPlaceholder = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #888;
  background-color: #f9f9f9;
  border-radius: 8px;
`;
