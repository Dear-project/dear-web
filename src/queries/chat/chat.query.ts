import { useMutation, useQuery } from "react-query";
import { QUERY_KEYS } from "../QueryKey";
import chatRepositoryImpl from "@/repositories/chat/chatRepositoryImpl";
import { ChatGetResponse, ChatSearchProps} from "@/types/chat/chat.type";
import { AxiosError } from "axios";


export const useGetChat = (userId: number) => {  
  return useQuery<ChatGetResponse, AxiosError>({
    queryKey: [QUERY_KEYS.chat.getChatMy],
    queryFn: () => chatRepositoryImpl.getChat(userId),
    cacheTime: 5 * 60 * 1000, 
    refetchInterval: 3600000, 
  });
};

export const useChatSearch = ({userId,word}:ChatSearchProps)=>{
  return useQuery<ChatGetResponse, AxiosError>({
    queryKey: [QUERY_KEYS.chat.getChaySerach],
    queryFn: () => chatRepositoryImpl.chatSearch({userId,word}),
    cacheTime: 5 * 60 * 1000, 
    refetchInterval: 3600000, 
  })
}
