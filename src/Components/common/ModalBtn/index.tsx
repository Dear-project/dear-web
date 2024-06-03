import React, { Dispatch, SetStateAction, useState, useRef } from "react";
import * as S from "./style";
import ProfileModal from "src/Components/common/ProfileModal";

interface ModalProps {
  setModalBtn: Dispatch<SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ setModalBtn }) => {
  const [modal, setModal]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  return (
    <S.layout>
      {modal && <ProfileModal setModal={setModal} modalRef={modalRef} />}
      <S.Boxlayout>
        <S.profile
          onClick={() => {
            setModal(true);
            setModalBtn(false);
          }}
        >
          프로필
        </S.profile>
        <S.logout>로그아웃</S.logout>
      </S.Boxlayout>
    </S.layout>
  );
};

export default Modal;
