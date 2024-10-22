'use Client'
import * as S from "./style";
import Profile from "@/asset/img/Avatar.svg";
import Image from "next/image";
import { ChatData } from "@/types/chat/chat.type";

interface ChatItemProps {
  chat: ChatData;  
  setSelectedChat: (chat: ChatData) => void; 
}

const ChatItem = ({ chat, setSelectedChat }: ChatItemProps) => {
  return (
    <S.chatItem onClick={() => setSelectedChat(chat)}> {/* Handle click */}
      <Image src={Profile} alt="프로필" width={50} height={50}/>
      <S.chatDetail>
        <S.chatTitle>
          <span>{chat.chatName}</span>
          <p>박승철 헤어디자인과</p> {/* 예시 데이터 */}
        </S.chatTitle>
        <S.content>
          <span>{chat.lastMessage}</span>
        </S.content>
      </S.chatDetail>
      <S.timeDetail>
        <span>{new Date(chat.lastMessageTimeStamp).toLocaleTimeString()}</span>
      </S.timeDetail>
    </S.chatItem>
  );
};

export default ChatItem;
