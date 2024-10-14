import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useGetChat, useChatSearch} from "@/queries/chat/chat.query";
import { ProfileId } from "@/store/profile/profile.store";


const useChat=()=>{
    const [chatSearch, setCatSearch] = useState("");
    const [profileId] = useRecoilState(ProfileId);
    const { data: allChats } = useGetChat(profileId);
    

    let roomData = allChats;
    const searchButton =()=>{
        const {data:searchChat} = useChatSearch({userId:profileId,word:chatSearch})
        roomData = searchChat;
    }

    return{
        roomData,
        chatSearch,
        setCatSearch,
        searchButton,
    }
}
export default useChat;