"use client";
import React from "react";
import Image from "next/image";
import * as S from "./style";
import Homelight from "src/asset/homeLight.svg";
import Home1 from "src/asset/home.svg";
import Chat from "src/asset/chat.svg";
import Chatlight from "src/asset/chatLight.svg"
import Find from "src/asset/find.svg";
import Findlight from "src/asset/findLight.svg"
import Community from "src/asset/community.svg";
import Communitylight from "src/asset/communityLight.svg"
import Profile from "src/asset/Profile.svg";
import { useRouter } from "next/navigation";
import useSidebar from "src/hooks/sidebar/useSidebar";
import Link from "next/link";
import {useGetProfileInfo} from "../../../queries/profile/query"

export const Index = () => {
  const { selectedItem, handleItemClick, userProfile, handleLogoclick,data } =
    useSidebar();
  const router = useRouter();

  return (
    
      <S.Side>
        <S.Logo onClick={handleLogoclick}>DEAR.</S.Logo>

        <S.Option>
          <Link
            href="/main"
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

          <Link href="/chat" style={{ textDecoration: "none" }}>
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

          <Link href="/find" style={{ textDecoration: "none" }}>
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

          <Link href="/community" style={{ textDecoration: "none" }}>
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
          <Image
            src={Profile}
            alt="프로필"
            width={45}
            height={45}
            style={{ borderRadius: "100%" }}
          />
          <div>
            <S.Name>{data?.data.name || "홍길동"}</S.Name>
            <S.School>
              {data?.data.schoolName || "대구소프트웨어 마이스터 고등학교"} 
            </S.School>
          </div>
        </S.My>
      </S.Side>
  );
};
export default Index;