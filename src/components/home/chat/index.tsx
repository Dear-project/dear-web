import { useState } from "react";
import ChatSideBar from "./chatSidebar/index";
import * as S from "./style";
import { ChatData } from "@/types/chat/chat.type";

const Chat = () => {
    const [selectedChat, setSelectedChat] = useState<ChatData | null>(null); 

  return (
    <S.chatContainer>
      <ChatSideBar setSelectedChat={setSelectedChat} /> 
      {selectedChat ? (
        <S.chatRoom>
          <h2>{selectedChat.data.chatName} 채팅방</h2>
        </S.chatRoom>
      ) : (
        <S.chatPlaceholder>
          <h2>목록에서 채팅방을 선택하세요</h2>
        </S.chatPlaceholder>
      )}
    </S.chatContainer>
  );
};

export default Chat;
