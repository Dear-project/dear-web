'use Client'
import * as S from "./style";
import Profile from "@/asset/img/Avatar.svg";
import Image from "next/image";
import { ChatData } from "@/types/chat/chat.type";

interface ChatItemProps {
  chat: ChatData;
  setSelectedChat: (chat: ChatData | null) => void; 
  isSelected: boolean; 
}

const ChatItem = ({ chat, setSelectedChat ,isSelected}: ChatItemProps) => {
  const handleClick = () => {
    if (isSelected) {
      setSelectedChat(null);
    } else {
      setSelectedChat(chat); 
    }
  };
  return (
    <S.chatItem 
    onClick={handleClick} 
    isSelected={isSelected} 
  >
      <Image src={Profile} alt="프로필" width={35} height={35}/>
      <S.chatDetail>
        <S.chatTitle>
          <span>{chat.chatName}</span>
          <p>박승철 헤어디자인과</p>
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
