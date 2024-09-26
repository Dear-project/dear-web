import { useState } from "react";
import * as S from "./style";
import { SearchBar } from "@/components/common/searchBar/index";
import { AiOutlineSearch } from "react-icons/ai";
import ChatItem from "./chatItem/index";
import { useGetChat } from "@/queries/chat/chat.query";
import { useRecoilState } from "recoil";
import { ProfileId } from "@/store/profile/profile.store";

const ChatSideBar = ()=>{
    const [chatSearch, setCatSearch]= useState("");
    const [profileId, ] = useRecoilState(ProfileId);
    const { data } = useGetChat(profileId);
return(
    <S.sideChatList>
          <S.sideHeader>
            <S.search>
            <SearchBar onChange={setCatSearch} value={chatSearch} placeholder={"채팅방 검색"}/>
            <S.searchButton>
                <AiOutlineSearch size="20px" color="#fff"/>
            </S.searchButton>
            </S.search>
          </S.sideHeader>
            <ChatItem chatData={data?.data} />
    </S.sideChatList>
)
}
export default ChatSideBar;