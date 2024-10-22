// import React, { useEffect, useRef, useState } from "react";
// import { Client } from "@stomp/stompjs";
// import * as S from "./style"; // Ensure to create this file for styling

// const ChatRoom = () => {
//   const [messages, setMessages] = useState([]);
//   const [messageInput, setMessageInput] = useState("");
//   const client = useRef(null);
//   const roomId = "your-room-id"; // Replace with your room ID
//   const accessToken = "your-access-token"; // Replace with your access token

//   useEffect(() => {
//     client.current = new Client({
//       brokerURL: "ws://your-stomp-url/stomp/chat", // Replace with your STOMP URL
//       connectHeaders: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//       debug: (str) => {
//         console.log(str);
//       },
//       onConnect: (frame) => {
//         console.log("Connected: " + frame);
//         client.current.subscribe(`/exchange/chat.exchange/room.${roomId}`, (message) => {
//           if (message.body) {
//             const newMessage = JSON.parse(message.body);
//             setMessages((prevMessages) => [newMessage, ...prevMessages]);
//           }
//         });
//       },
//       onDisconnect: (frame) => {
//         console.log("Disconnected: " + frame);
//       },
//       // Add error handling if needed
//     });

//     client.current.activate();

//     return () => {
//       client.current.deactivate();
//     };
//   }, [roomId, accessToken]);

//   const sendMessage = () => {
//     if (client.current && messageInput.trim() !== "") {
//       client.current.publish({
//         destination: "/pub/chat.message",
//         headers: { Authorization: `Bearer ${accessToken}` },
//         body: JSON.stringify({
//           roomId: roomId,
//           type: "MESSAGE",
//           message: messageInput,
//         }),
//       });
//       setMessageInput(""); // Clear input after sending
//     }
//   };

//   return (
//     <S.ChatRoomView>
//       <S.MessagesContainer>
//         {messages.map((msg, index) => (
//           <S.Message key={index} isSelf={msg.userId === "your-user-id"}>
//             {msg.message}
//           </S.Message>
//         ))}
//       </S.MessagesContainer>
//       <S.InputContainer>
//         <S.Input
//           value={messageInput}
//           onChange={(e) => setMessageInput(e.target.value)}
//           placeholder="메시지를 입력해보세요."
//         />
//         <S.SendButton onClick={sendMessage}>Send</S.SendButton>
//       </S.InputContainer>
//     </S.ChatRoomView>
//   );
// };

// export default ChatRoom;
