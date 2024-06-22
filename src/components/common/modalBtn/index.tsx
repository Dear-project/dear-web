import React, { Dispatch, SetStateAction, useState, useRef } from "react";
import * as S from "./style";
import ProfileModal from "../profileModal/index";

interface ModalProps {
  setModalBtn: Dispatch<SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ setModalBtn }) => {
  const [modal, setModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleProfileClick = () => {
    setModal(true);
  };

  return (
    <S.layout
    
    
    >
      <S.Boxlayout onClick={(e) => e.stopPropagation()}>
        <S.profile onClick={handleProfileClick}>프로필</S.profile>
        <S.logout>로그아웃</S.logout>
      </S.Boxlayout>
      {modal && <ProfileModal setModal={setModal} modalRef={modalRef} />}
    </S.layout>
  );
};

export default Modal;
