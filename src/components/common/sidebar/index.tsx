"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import * as S from "./style";
import Homelight from "src/asset/homeLight.svg";
import Chatlight from "src/asset/chatLight.svg";
import Findlight from "src/asset/findLight.svg";
import Communitylight from "src/asset/communityLight.svg";
import Home1 from "src/asset/home.svg";
import Chat from "src/asset/chat.svg";
import Find from "src/asset/find.svg";
import Community from "src/asset/community.svg";
import Profile from "public/svgs/Avatar.svg";
import { useRouter } from "next/router";
import useSidebar from "src/hooks/sidebar/useSidebar";
import Link from "next/link";
import Modal from "src/components/common/modalBtn";

export const Index = () => {
  const [modalBtn, setModalBtn] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const { selectedItem, handleItemClick, userProfile, handleLogoclick } =
    useSidebar();

  return (
    <S.Side>
      <S.Logo onClick={handleLogoclick}>DEAR.</S.Logo>

      <S.Option>
        <Link
          href="/Main"
          legacyBehavior
          style={{ textDecoration: "none", outline: "none" }}
        >
          <S.Select
            isSelected={selectedItem === "home"}
            onClick={() => handleItemClick("home")}
          >
            <Image
              src={selectedItem === "home" ? Homelight : Home1}
              alt="메인"
              width={30}
              height={30}
            />
            메인
          </S.Select>
        </Link>

        <Link href="/Chat" style={{ textDecoration: "none" }}>
          <S.Select
            isSelected={selectedItem === "chat"}
            onClick={() => handleItemClick("chat")}
          >
            <Image
              src={selectedItem === "chat" ? Chatlight : Chat}
              alt="채팅"
              width={30}
              height={30}
            />
            채팅
          </S.Select>
        </Link>

        <Link href="/Find" style={{ textDecoration: "none" }}>
          <S.Select
            isSelected={selectedItem === "find"}
            onClick={() => handleItemClick("find")}
          >
            <Image
              src={selectedItem === "find" ? Findlight : Find}
              alt="교수찾기"
              width={30}
              height={30}
            />
            교수찾기
          </S.Select>
        </Link>

        <Link href="/Community" style={{ textDecoration: "none" }}>
          <S.Select
            isSelected={selectedItem === "community"}
            onClick={() => handleItemClick("community")}
          >
            <Image
              src={selectedItem === "community" ? Communitylight : Community}
              alt="커뮤니티 광장"
              width={30}
              height={30}
            />
            커뮤니티 광장
          </S.Select>
        </Link>
      </S.Option>

      <S.My>
        {modalBtn && <Modal setModalBtn={setModalBtn} />}

        <Image
          src={Profile}
          alt="프로필"
          width={45}
          height={45}
          style={{ borderRadius: "100%" }}
          onClick={() => {
            console.log("fiqjehfopiqj");
            setModalBtn((prev) => !prev);
          }}
        />
        <div>
          <S.Name>{userProfile?.name}</S.Name>
          <S.School>{userProfile?.schoolName}</S.School>
        </div>
      </S.My>
    </S.Side>
  );
};

export default Index;
