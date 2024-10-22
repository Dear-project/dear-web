import { useRecoilState } from "recoil";
import { ProfileId } from "@/store/profile/profile.store";
import { ChatData } from "@/types/chat/chat.type";
import { SearchBar } from "@/components/common/searchBar/index";
import { AiOutlineSearch } from "react-icons/ai";
import ChatItem from "./chatItem/index";
import useChat from "@/hooks/chat/useChat";
import * as S from "./style";

interface ChatSideBarProps {
  setSelectedChat: (chat: ChatData | null) => void;
}

const ChatSideBar = ({ setSelectedChat }: ChatSideBarProps) => {
  const { roomData, setCatSearch, chatSearch, searchButton } = useChat();
  const [profileId] = useRecoilState(ProfileId);

  console.log(roomData);

  return (
    <S.sideChatList>
      <S.sideHeader>
        <S.search>
          <SearchBar onChange={setCatSearch} value={chatSearch} placeholder={"채팅방 검색"} />
          <S.searchButton onClick={searchButton}>
            <AiOutlineSearch size="20px" color="#fff" />
          </S.searchButton>
        </S.search>
      </S.sideHeader>

      <S.chatList>
        {Array.isArray(roomData) ? (
          roomData?.map((chat: ChatData) => <ChatItem key={chat.id} chat={chat} setSelectedChat={setSelectedChat} />)
        ) : (
          <span>채팅방이 없습니다.</span>
        )}
      </S.chatList>
    </S.sideChatList>
  );
};

export default ChatSideBar;
