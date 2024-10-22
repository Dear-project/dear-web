import { useEffect, useRef, useState } from "react";
import { Client } from "@stomp/stompjs";

const SocketClient = () => {
  const [message, setMessage] = useState<string | null>(null);
  const stompClient = useRef<Client | null>(null);

  useEffect(() => {
    const socketUrl = "ws://your-socket-server-url/ws";
    
    const client = new Client({
      brokerURL: socketUrl,
      debug: (str) => {
        console.log(str); 
      },
      reconnectDelay: 5000, // 재연결 대기 시간 (5초)
      onConnect: () => {
        console.log("Connected");

        // 구독 설정
        client.subscribe("/topic/messages", (message) => {
          setMessage(message.body);
        });
      },
      onStompError: (frame) => {
        console.error("STOMP error: ", frame);
      },
    });

    stompClient.current = client;
    client.activate(); // 연결 시작

    return () => {
      // 컴포넌트 언마운트 시 연결 해제
      if (stompClient.current) {
        stompClient.current.deactivate();
      }
    };
  }, []);

};

export default SocketClient;
