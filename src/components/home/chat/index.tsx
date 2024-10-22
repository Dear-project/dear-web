"use client";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useQueryClient } from "react-query";
import ChatSideBar from "./chatSidebar/index";
import * as S from "./style"; 
import { ChatData } from "@/types/chat/chat.type";
import { Client } from "@stomp/stompjs";
import CONFIG from "@/config/config.json";
import token from "@/libs/token/tokens";
import { ACCESS_TOKEN_KEY } from "@/constants/token/token.constants";
import ChatRoom from "./chatRoom";
import { useRecoilState } from "recoil";
import { ProfileId } from "@/store/profile/profile.store";
import dearAxios from "@/libs/axios/customAxios";
import { chatProfile } from "@/store/chat/chat.store";

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState<ChatData | null>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const client = useRef<Client | null>(null);
  const roomId = selectedChat ? selectedChat.id : null;
  const accessToken = token.getToken(ACCESS_TOKEN_KEY);
  const [userId] = useRecoilState(ProfileId);
  const [profileImg] = useRecoilState(chatProfile);
  
const fetchMessageHistory = async (roomId: string) => {
  
  try {
    const response = await dearAxios.get(`/message/search/${roomId}`, {
      params: {
        userId: userId,
      },
    });
    
    const messageHistory = response.data.messages;
    setMessages(messageHistory);
    
    
  } catch (error) {
    console.error('Error fetching message history:', error);
  }
};

  useEffect(() => {
    if (roomId) {
      fetchMessageHistory(roomId);
      client.current = new Client({
        brokerURL: `${CONFIG.SOCKET_URL}/stomp/chat`,
        connectHeaders: {
          Authorization: `Bearer ${accessToken}`,
        },
        debug: (str) => {
          // console.log(str);
        },
        onConnect: (frame) => {
          console.log("Connected: " + frame);
          client.current?.subscribe(`/exchange/chat.exchange/room.${roomId}`, (message) => {
            if (message.body) {
              const parsedMessage = JSON.parse(
                new TextDecoder().decode(new Uint8Array(message.binaryBody))
              );
              setMessages((prevMessages) => [parsedMessage, ...prevMessages]);
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

  const handleSendMessage = () => {
    if (client.current && newMessage.trim() !== "") {

      client.current.publish({
        destination: '/pub/chat.message',
        headers: { Authorization: `Bearer ${accessToken}` },
        body: JSON.stringify({
          roomId: roomId,
          type: "MESSAGE",
          message: newMessage,
        })
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
            sendMessage={handleSendMessage}
            userId={userId} 
            roomimg={profileImg}
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
