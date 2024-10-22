import { ChatRepository } from "./chatRepository";
import { ChatData, ChatGetResponse, ChatSearchProps } from "../../types/chat/chat.type";
import dearAxios from "@/libs/axios/customAxios";

class ChatRepositoryImpl implements ChatRepository {
  public async getChat(userId: number): Promise<ChatData[]> {
    console.log(userId);
    const { data } = await dearAxios.get(`chat/get`, {
      params: { userId: userId },
    });

    return data;
  }
  public async chatSearch({ userId, word }: ChatSearchProps): Promise<ChatData[]> {
    const { data } = await dearAxios.get(`/chat/search?userId=${userId}&word=${word}`);
    return data;
  }
  public async openChat() {}
}
export default new ChatRepositoryImpl();
