import { atom } from 'recoil';

export const currentChattingRoomState = atom({
    key: 'currentChattingRoomState', 
    default: { id: null },
});

export const isConnectedState = atom({
    key: 'isConnectedState', 
    default: false, 
});


export const currentRenderChatState = atom<string | null>({
    key: 'currentRenderChatState', // 상태의 고유 키
    default: null, // 초기값
});

export const chatProfile = atom<string>({
    key: 'profilImg',
    default: "",
})