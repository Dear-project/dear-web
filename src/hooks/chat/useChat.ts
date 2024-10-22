import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useGetChat } from "@/queries/chat/chat.query";
import { ProfileId } from "@/store/profile/profile.store";
import { useChatSearch } from "@/queries/chat/chat.query"; 

const useChat = () => {
  const [chatSearch, setChatSearch] = useState("");
  const [profileId] = useRecoilState(ProfileId);
  const { data: allChats } = useGetChat(profileId);
  
  const { data: searchChat } = useChatSearch({ userId: profileId, word: chatSearch }); // useChatSearch 호출

  
  const roomData = chatSearch ? searchChat : allChats;

  return {
    roomData,
    chatSearch,
    setChatSearch,
  };
};

export default useChat;
