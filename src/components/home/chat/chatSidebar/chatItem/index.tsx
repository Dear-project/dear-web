'use Client'
import * as S from "./style";
import Profile from "@/asset/img/AvaerImg.svg";
import Image from "next/image";
import { ChatData } from "@/types/chat/chat.type";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import { chatProfile } from "@/store/chat/chat.store";
import { useRecoilState } from "recoil";

dayjs.locale('ko'); 

interface ChatItemProps {
  chat: ChatData;
  setSelectedChat: (chat: ChatData | null) => void; 
  isSelected: boolean; 
}

const ChatItem = ({ chat, setSelectedChat ,isSelected}: ChatItemProps) => {
  
  const [profileImg,setprofileImg] = useRecoilState(chatProfile);
  setprofileImg(chat.roomImage);
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
      <Image src={chat.roomImage || Profile} alt="프로필" width={35} height={35}/>
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
        <span>{dayjs(chat.lastMessageTimeStamp).format('A h시 mm분')}</span>
      </S.timeDetail>
    </S.chatItem>
  );
};

export default ChatItem;
