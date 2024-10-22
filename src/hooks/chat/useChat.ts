import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useGetChat, useChatSearch } from "@/queries/chat/chat.query";
import { ProfileId } from "@/store/profile/profile.store";

const useChat = () => {
  const [chatSearch, setCatSearch] = useState("");
  const [profileId] = useRecoilState(ProfileId);
  const { data: allChats } = useGetChat(profileId);
  const [roomData, setRoomData] = useState(allChats);
  const { data: searchChat } = useChatSearch({
    userId: profileId,
    word: chatSearch,
  });
  const searchButton = async () => {
    if (chatSearch.trim() === "") {
      setRoomData(allChats);
    } else {
      setRoomData(searchChat); // 검색 결과로 roomData 업데이트
    }
  };

  // allChats가 변경될 때 roomData 초기화
  useEffect(() => {
    setRoomData(allChats);
  }, [allChats]);

  return {
    roomData,
    chatSearch,
    setCatSearch,
    searchButton,
  };
};

export default useChat;
