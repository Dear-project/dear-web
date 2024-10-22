import { useState, useEffect,useRef } from "react";
import { useQueryClient } from "react-query";
import ChatSideBar from "./chatSidebar/index";
import * as S from "./style";
import { ChatData } from "@/types/chat/chat.type";
import { Client } from "@stomp/stompjs"; 
import CONFIG from "@/config/config.json"
import token from "@/libs/token/tokens";
import { ACCESS_TOKEN_KEY  } from "@/constants/token/token.constants";

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState<ChatData | null>(null);
  const [messages, setMessages] = useState<any[]>([]); 
  const queryClient = useQueryClient();
  const client = useRef<Client | null>(null);
  const roomId = selectedChat ? selectedChat.data.id : null; 
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
              setMessages((prevMessages) => [newMessage, ...prevMessages]); // Prepend new messages
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
