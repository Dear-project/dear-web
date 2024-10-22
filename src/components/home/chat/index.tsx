"use client";
import { useState, useEffect, useRef } from "react";
import { useQueryClient } from "react-query";
import ChatSideBar from "./chatSidebar/index";
import * as S from "./style"; // Assuming this imports your styled components
import { ChatData } from "@/types/chat/chat.type";
import { Client } from "@stomp/stompjs";
import CONFIG from "@/config/config.json";
import token from "@/libs/token/tokens";
import { ACCESS_TOKEN_KEY } from "@/constants/token/token.constants";
import ChatRoom from "./chatRoom";


const Chat = () => {
  const [selectedChat, setSelectedChat] = useState<ChatData | null>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const client = useRef<Client | null>(null);
  const roomId = selectedChat ? selectedChat.id : null;
  const accessToken = token.getToken(ACCESS_TOKEN_KEY);



  useEffect(() => {
    if (roomId) {
      client.current = new Client({
        brokerURL: `${CONFIG.SOCKET_URL}/stomp/chat`,
        connectHeaders: {
          Authorization: `Bearer ${accessToken}`,
        },
        debug: (str) => {
          console.log(str);
        },
        onConnect: (frame) => {
          console.log("Connected: " + frame);
          client.current?.subscribe(`/exchange/chat.exchange/room.${roomId}`, (message) => {
            if (message.body) {
              const newMessage = JSON.parse(message.body);
              setMessages((prevMessages) => [newMessage, ...prevMessages]);
            }
          });
        },
        onDisconnect: (frame) => {
          console.log("Disconnected: " + frame);
        },
      });

      client.current.activate();

      return () => {
        client.current!.deactivate();
      };
    }
  }, [roomId, accessToken]);

  const sendMessage = () => {
    if (newMessage.trim() && client.current) {
      const message = {
        roomId: selectedChat?.id,
        type: "MESSAGE",
        message: newMessage.trim(),
      };

      client.current.publish({
        destination: "/pub/chat.message",
        body: JSON.stringify(message),
      });

      setNewMessage("");
    }
  };

  return (
    <S.ChatContainer>
      <ChatSideBar setSelectedChat={setSelectedChat} selectedChat={selectedChat} />
      <S.ChatRoomContainer>
        {selectedChat ? (
          <ChatRoom 
            selectedChat={selectedChat} 
            messages={messages} 
            newMessage={newMessage} 
            setNewMessage={setNewMessage}
            sendMessage={sendMessage}
          />
        ) : (
          <S.ChatPlaceholder>
           목록에서 채팅방을 선택하세요
          </S.ChatPlaceholder>
        )}
      </S.ChatRoomContainer>
    </S.ChatContainer>
  );
};

export default Chat;
