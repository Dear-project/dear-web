
export interface ChatData {
    data:{
        id: string,
        adminId: number,
        chatName: string,
        createdAt: string,
        joinedUserId: number,
        lastMessage: string,
        lastMessageTimeStamp: string,
        notReadCnt: 0,
        chatStatus: "ALIVE" | "DELETE"
    }
    
}
export interface ChatGetResponse {
    data : ChatData[];
}