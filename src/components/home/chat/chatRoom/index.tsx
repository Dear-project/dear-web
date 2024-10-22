import React from "react";
import * as S from "./style";
import Image from "next/image";
import { ChatData } from "@/types/chat/chat.type";
import Profile from "@/asset/img/AvaerImg.svg";
import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale('ko'); 

interface ChatRoomProps {
  selectedChat: ChatData; 
  messages: any[]; 
  newMessage: string;
  setNewMessage: (value: string) => void;
  sendMessage: () => void;
  userId: number;
  roomimg:string;
}


const ChatRoom = ({ selectedChat, messages, newMessage, userId,roomimg, setNewMessage, sendMessage }:ChatRoomProps) => {
    
    const formatTime = (timeStamp: string) => {
        return dayjs(timeStamp).format('A h시 mm분'); // A는 오전/오후, h는 시, mm는 분
      };
    
      const sortedMessages = [...messages].sort((a, b) => {
        return new Date(a.timeStamp).getTime() - new Date(b.timeStamp).getTime();
      });

  return (
    <S.ChatRoom>
        <S.ChatRoomHeader>
        <Image src={roomimg ||Profile} alt="프로필" width={30} height={30}/>
            <h1>{selectedChat.chatName}</h1>
        </S.ChatRoomHeader>
      <S.ChatRoomContainer>
       
      <S.MyMessageList>     
      {sortedMessages.map((msg, index) => (
          msg.userId !== userId ? ( 
            <S.MessageProfile key={index}>
              <Image src={msg.profileImage || Profile} alt="프로필" width={30} height={30}/>
              <p>{msg.message}</p>
              <span>{formatTime(msg.timeStamp)}</span>
            </S.MessageProfile>
          ) : <S.MyChat key={index}>
          <p>{msg.message}</p>
          <span>{formatTime(msg.timeStamp)}</span>
        </S.MyChat>
        ))}
       
        
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
