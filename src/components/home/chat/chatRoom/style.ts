import styled from "styled-components";
import {theme} from "@/styles/theme";
export const ChatRoom = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: ${theme.colors.gray100};
`;
export const ChatRoomHeader = styled.div`
height: 5%;
border-bottom: 1px solid ${theme.colors.gray300};
background:${theme.colors.white};
border-radius: 0 10px;
padding: 20px;
`
export const ChatRoomContainer = styled.div`
display: flex;
width: 100%;
height: 100%;

`
export const OpponentMessageList = styled.div`
display: flex;
flex-direction: column;
gap:60px;
width: 50%;
height: 100%;
`
export const MyMessageList = styled.div`
display: flex;
flex-direction: column;
gap:60px;
width: 50%;
height: 100%;
`
export const ChatPlaceholder = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #888;
  background-color: #f9f9f9;
  border-radius: 8px;
`;

export const MessageInputContainer = styled.div`
  display: flex;
  margin-top: 20px;

  input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
  }

  button {
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;