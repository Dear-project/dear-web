import { ChatGetResponse,ChatSearchProps } from "../../types/chat/chat.type";


export interface ChatRepository {
    getChat(userId: number): Promise<ChatGetResponse>;
    chatSearch({userId, word}:ChatSearchProps):Promise<ChatGetResponse>
  }

