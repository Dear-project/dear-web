import { ChatRepository } from "./chatRepository";
import { ChatGetResponse,ChatSearchProps } from "../../types/chat/chat.type";
import dearAxios from "@/libs/axios/customAxios";

 class ChatRepositoryImpl implements ChatRepository {
    public async getChat(userId:number):Promise<ChatGetResponse> {
        const {data} = await dearAxios.get('chat/get',{params:userId});
        return data
    }
    public async chatSearch({userId, word}:ChatSearchProps):Promise<ChatGetResponse>{
        const {data} = await dearAxios.get(`/chat/search?userId=${userId}&word=${word}`);
        return data
    }


   
 }
 export default new ChatRepositoryImpl