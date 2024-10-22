export interface ChatData {
  id: string;
  adminId: number;
  chatName: string;
  createdAt: string;
  joinedUserId: number;
  lastMessage: string;
  lastMessageTimeStamp: string;
  roomImage:string;
  notReadCnt: 0;
  chatStatus: "ALIVE" | "DELETE";
}
export interface ChatSearchProps {
  userId: number;
  word: string;
}

export interface ChatGetResponse {
  data: ChatData[];
}
