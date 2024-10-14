import { useState } from "react";
import * as S from "./style";
import { SearchBar } from "@/components/common/searchBar/index";
import { AiOutlineSearch } from "react-icons/ai";
import ChatItem from "./chatItem/index";
import { useGetChat, useChatSearch} from "@/queries/chat/chat.query";
import { useRecoilState } from "recoil";
import { ProfileId } from "@/store/profile/profile.store";
import { ChatData } from "@/types/chat/chat.type";
import useChat from "@/hooks/chat/useChat";

interface ChatSideBarProps {
  setSelectedChat: (chat: ChatData | null) => void; 
}

const ChatSideBar = ({ setSelectedChat }: ChatSideBarProps) => { 
  const {...Chat} = useChat();
  const [profileId] = useRecoilState(ProfileId);

 

  return (
    <S.sideChatList>
      <S.sideHeader>
        <S.search>
          <SearchBar onChange={Chat.setCatSearch} value={Chat.chatSearch} placeholder={"채팅방 검색"} />
          <S.searchButton onClick={Chat.searchButton}>
            <AiOutlineSearch size="20px" color="#fff" />
          </S.searchButton>
        </S.search>
      </S.sideHeader>
      <ChatItem chatData={Chat.roomData?.data} setSelectedChat={setSelectedChat} />
    </S.sideChatList>
  );
};

export default ChatSideBar;
