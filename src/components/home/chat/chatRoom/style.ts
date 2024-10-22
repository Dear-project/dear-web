import styled from "styled-components";

export const ChatRoomView = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f1f1f1;
`;

export const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
`;

export const Message = styled.div`
  background-color: ${(props) => (props.isSelf ? "#dcf8c6" : "#fff")};
  padding: 10px;
  border-radius: 5px;
  margin: 5px 0;
  align-self: ${(props) => (props.isSelf ? "flex-end" : "flex-start")};
`;

export const InputContainer = styled.div`
  display: flex;
  padding: 10px;
  background-color: white;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const SendButton = styled.button`
  margin-left: 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;
