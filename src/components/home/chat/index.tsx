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

  useEffect(() => {
    if (selectedChat) {
      const stompClient = new Client({
        brokerURL: "ws://localhost:8080/ws", 
        reconnectDelay: 5000, 
      });

      stompClient.onConnect = () => {
        stompClient.subscribe(`/topic/chat/${selectedChat.data.id}`, (message) => {
          const newMessage = JSON.parse(message.body);
          setMessages((prevMessages) => [...prevMessages, newMessage]);

          
          queryClient.setQueryData(["chatMessages", selectedChat.data.id], (old: any) => {
            return [...(old || []), newMessage];
          });
        });
      };

      stompClient.activate(); 

      return () => {
        stompClient.deactivate(); 
      };
    }
  }, [selectedChat, queryClient]);

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
