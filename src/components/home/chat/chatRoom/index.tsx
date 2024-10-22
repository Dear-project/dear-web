import React from "react";
import * as S from "./style";
import { ChatData } from "@/types/chat/chat.type";
interface ChatRoomProps {
  selectedChat: ChatData; 
  messages: any[]; 
  newMessage: string;
  setNewMessage: (value: string) => void;
  sendMessage: () => void;
}

const ChatRoom = ({ selectedChat, messages, newMessage, setNewMessage, sendMessage }:ChatRoomProps) => {
 
    
  return (
    <S.ChatRoom>
        <S.ChatRoomHeader><h2>{selectedChat.chatName}</h2></S.ChatRoomHeader>
      <S.ChatRoomContainer>
        <S.OpponentMessageList>
        {messages.map((msg, index) => (
          <p key={index}>{msg.content}</p>
        ))}
        </S.OpponentMessageList>
        <S.MyMessageList>
            
        </S.MyMessageList>
      </S.ChatRoomContainer>
      <S.MessageInputContainer>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="메시지를 입력하세요"
        />
        <button onClick={sendMessage}>전송</button>
      </S.MessageInputContainer>
    </S.ChatRoom>
  );
};

export default ChatRoom;
