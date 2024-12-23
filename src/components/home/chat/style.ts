import styled from "styled-components";
import {theme} from "@/styles/theme";

export const ChatContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const ChatRoomContainer = styled.div`
display: flex;
width: calc(100% - 20%);
min-width: 400px;
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
