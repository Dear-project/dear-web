import { ChatGetResponse } from "../../types/chat/chat.type";

export interface ChatRepository {
    getChat(userId: number): Promise<ChatGetResponse>;
  
  }

