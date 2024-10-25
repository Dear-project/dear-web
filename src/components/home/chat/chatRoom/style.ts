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
display: flex;
align-items: center;
height: 5%;
border-bottom: 1px solid ${theme.colors.gray300};
background:${theme.colors.white};
border-radius: 0 10px;
padding: 20px;
img{
  border-radius: 50%;
  margin-right: 10px;
}
`
export const ChatRoomContainer = styled.div`
display: flex;
width: 100%;
height: 100%;
overflow-x: hidden;
overflow-y: scroll;

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
margin-top: 30px;

width: 100%;
height: 100%;
overflow-y: scroll;
span{
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 2px;

  font-size: 9px;
}
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

export const MessageProfile = styled.div`
display: flex;
margin-left: 30px;
min-width: 100px;
min-height: 20px;
gap: 10px;
img{
  border-radius: 50%;
}
p{
  min-width: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 10px;
  border-radius: 5px;
  padding: 0 10px;
  background-color: ${theme.colors.white};
}
`
export const MyChat = styled.div`
display: flex;
margin-right: 30px;
min-width: 100px;
min-height: 20px;
flex-direction: row-reverse;
gap: 5px;
p{
  min-width: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
  padding: 10px 10px;
  background-color: ${theme.colors.white};
}
`
export const MessageInputContainer = styled.div`
  display: flex;
  margin-top: 20px;

  input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
    &:focus{
      outline: none;
    }
  }

  button {
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    background-color: #ccc;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.new};
    }
  }
`;