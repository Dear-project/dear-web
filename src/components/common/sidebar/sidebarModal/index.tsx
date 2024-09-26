'use client'
import React, { useState } from "react";
import { CSSObject } from "styled-components";
import * as S from "./style";
import Modal from "@/components/common/modal/index";
import useLogout from "@/hooks/auth/useLogout";

interface SideBarModalProps {
    isOpen:boolean;
    close:()=>void;
    handleProfileClick: ()=>void;
    customStyle?: CSSObject;
}

const SideBarModal = ({ 
    isOpen,
    close ,
    handleProfileClick,
    customStyle
        }:SideBarModalProps)=>{
            const {logOut} = useLogout();
    return(
    <Modal isOpen={isOpen} close={close} customStyle={customStyle}>
        <S.layout>
        <S.Boxlayout onClick={(e) => e.stopPropagation()}>
          <S.profile onClick={handleProfileClick}>프로필</S.profile>
          <S.logout onClick={logOut}>로그아웃</S.logout>
        </S.Boxlayout>
      </S.layout>
      </Modal>
    )
}
export default SideBarModal;