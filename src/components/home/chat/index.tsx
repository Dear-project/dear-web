import { useState, useEffect } from "react";
import { useQueryClient } from "react-query";
import ChatSideBar from "./chatSidebar/index";
import * as S from "./style";
import { ChatData } from "@/types/chat/chat.type";
import { Client } from "@stomp/stompjs"; 

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState<ChatData | null>(null);
  const [messages, setMessages] = useState<any[]>([]); 
  const queryClient = useQueryClient();

  if(selectedChat !== null){

  }


  return (
    <S.ChatContainer>
      <ChatSideBar setSelectedChat={setSelectedChat} />
      <S.ChatRoomContainer>
      {selectedChat ? (
        <S.ChatRoom>
          <h2>{selectedChat.data.chatName}</h2>
          <div>
            {messages.map((msg, index) => (
              <p key={index}>{msg.content}</p> 
            ))}
          </div>
        </S.ChatRoom>
      ) : (
        <S.ChatPlaceholder>
          <h2>목록에서 채팅방을 선택하세요</h2>
        </S.ChatPlaceholder>
      )}
      </S.ChatRoomContainer>
    </S.ChatContainer>
  );
};

export default Chat;
