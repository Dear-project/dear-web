import { Client, Frame, Message,StompSubscription,} from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import CONFIG from "@/config/config.json"
import React,{useRef,} from "react";
import token from '@/libs/token/tokens';
import { ACCESS_TOKEN_KEY } from '@/constants/token/token.constants';
import { useRecoilState } from 'recoil';
import { currentChattingRoomState, isConnectedState,currentRenderChatState } from '@/store/chat/chat.store';

export const useChattingStomp = () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [currentChattingRoom] = useRecoilState(currentChattingRoomState);
    const [isConnected, setIsConnected] = useRecoilState(isConnectedState);
    const [currentRenderChat, setCurrentRenderChat] = useRecoilState(currentRenderChatState);
    


    const client = useRef<Client | null>(null);
    const subscription = useRef<StompSubscription>();
    const socket = useRef<WebSocket>();

    const accessToken  = token.getToken(ACCESS_TOKEN_KEY)
    
    const socketToken = accessToken || ""; 

    const subscribeChat = () => {
        setIsLoading(true);

        socket.current = new SockJS(`${CONFIG.STOMP_URL}/stomp/chat`);

       
        const { TextEncoder, TextDecoder } = require('text-encoding');
        Object.assign('global', {
            TextEncoder,
            TextDecoder
        });
        socket.current.onopen = () => {
            console.log("웹소켓 연결");
            client.current = new Client({
                webSocketFactory: () => socket.current, 
                brokerURL : `${CONFIG.STOMP_URL}/stomp/chat`,
                connectHeaders : {
                    Authorization: socketToken,
                    host: "/"
                },
                debug: (msg: string) => {
                    if(msg.includes("SUBSCRIBE")) {
                        setIsConnected(true);
                    }
                    console.log("[DEBUG] :", msg);
                },
                reconnectDelay: 1000,
                heartbeatIncoming: 2000,
                heartbeatOutgoing: 2000,
            });

            client.current?.activate();

            client.current.onConnect = () => {
                console.log("STOMP 연결");
                subscription.current = client.current?.subscribe(
                    `/exchange/chat.exchange/room.${currentChattingRoom.id}`,
                    message => {
                        const chatMessage = new TextDecoder().decode(new Uint8Array(message.binaryBody));
                        setCurrentRenderChat(chatMessage); 
                    },
                    {
                        authorization: socketToken
                    }
                );
            };
        };
    };

    const sendChat = ({ message, type, mention, mentionAll }: { message: string, type: string, mention: number[], mentionAll: boolean }) => {
        // 클라이언트가 생성되었는지 확인
        if (client.current != null) {
            // 클라이언트가 연결되었는지 확인
            if (client.current.connected) {
                client.current.publish({
                    destination: "/pub/chat.message",
                    headers: {
                        authorization: `Bearer ${accessToken}`,
                        host: "/"
                    },
                    body: JSON.stringify({
                        roomId: currentChattingRoom.id,
                        type: type,
                        message: message,
                        mention: mention,
                        mentionAll: mentionAll
                    })
                });
            } else {
                console.log("STOMP 연결안됨.");
            }
        } else {
            console.log("STOMP 생성안됨.");
        }
    }

 const unsubscribeChat = () => {
    subscription.current?.unsubscribe();
    client.current?.deactivate();
    socket.current?.close();
    setIsConnected(false); 
};

    return [isLoading, subscribeChat, sendChat, unsubscribeChat] as const;

}