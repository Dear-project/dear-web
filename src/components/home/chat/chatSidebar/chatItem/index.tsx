import * as S from "./style";
import Profile from "src/asset/Avatar.svg";
import Image from "next/image";
import { ChatData } from "@/types/chat/chat.type";

interface ChatItemProps {
  chatData?: ChatData[]; 
}

const ChatItem = ({ chatData }: ChatItemProps) => { 

  return (
    <S.chatList>
      {chatData?.map((chat: ChatData) => ( 
        <S.chatItem key={chat.data.id}>
          <Image src={Profile} alt="프로필" />
          <S.chatDetail>
            <S.chatTitle>
              <span>{chat.data.chatName}</span>
              <p>박승철 헤어디자인과</p>
            </S.chatTitle>
            <S.content>
              <span>{chat.data.lastMessage}</span>
            </S.content>
          </S.chatDetail>
          <S.timeDetail>
            <span>{new Date(chat.data.lastMessageTimeStamp).toLocaleTimeString()}</span>
          </S.timeDetail>
        </S.chatItem>
      ))}
    </S.chatList>
  );
};

export default ChatItem;
