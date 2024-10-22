import { ChatData, ChatGetResponse,ChatSearchProps } from "../../types/chat/chat.type";


export interface ChatRepository {
    getChat(userId: number): Promise<ChatData[]>;
    chatSearch({userId, word}:ChatSearchProps):Promise<ChatData[]>
  }

