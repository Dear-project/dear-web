"use client";
import React, { useState } from "react";
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
import Profile from "src/asset/images.jpeg";
import Link from "next/link";
export const Index = () => {
  // 선택된 아이템의 상태를 관리합니다.
  const [selectedItem, setSelectedItem] = useState("");

  // 아이템을 클릭했을 때 호출되는 함수입니다.
  const handleItemClick = (item: React.SetStateAction<any>) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <S.Side>
        <S.Logo>DEAR.</S.Logo>
        <S.Option>
          <Link href="/Main" legacyBehavior style={{ textDecoration: "none" }}>
            <S.Select
              onClick={() => handleItemClick("home")}
              style={{
                backgroundColor:
                  selectedItem === "home" ? "#0e2764" : "transparent",
                color: selectedItem === "home" ? "#ffffff" : "#000000",
              }}
            >
              <Image
                src={selectedItem === "home" ? Homelight : Home1}
                alt="메인"
                width={30}
                height={30}
                style={{ marginLeft: "10px" }}
              />
              메인
            </S.Select>
          </Link>

          <Link href={"/Chat"} style={{ textDecoration: "none" }}>
            <S.Select
              onClick={() => handleItemClick("chat")}
              style={{
                backgroundColor:
                  selectedItem === "chat" ? "#0e2764" : "transparent",
                color: selectedItem === "chat" ? "#ffffff" : "#000000",
              }}
            >
              <Image
                src={selectedItem === "chat" ? Chatlight : Chat}
                alt="채팅"
                width={30}
                height={30}
                style={{ marginLeft: "10px" }}
              />
              채팅
            </S.Select>
          </Link>
          <Link href={"/Find"} style={{ textDecoration: "none" }}>
            <S.Select
              onClick={() => handleItemClick("find")}
              style={{
                backgroundColor:
                  selectedItem === "find" ? "#0e2764" : "transparent",
                color: selectedItem === "find" ? "#ffffff" : "#000000",
              }}
            >
              <Image
                src={selectedItem === "find" ? Findlight : Find}
                alt="교수찾기"
                width={30}
                height={30}
                style={{ marginLeft: "10px" }}
              />
              교수찾기
            </S.Select>
          </Link>
          <Link href={"/community"} style={{ textDecoration: "none" }}>
            <S.Select
              onClick={() => handleItemClick("community")}
              style={{
                backgroundColor:
                  selectedItem === "community" ? "#0e2764" : "transparent",
                color: selectedItem === "community" ? "#ffffff" : "#000000",
              }}
            >
              <Image
                src={selectedItem === "community" ? Communitylight : Community}
                alt="커뮤니티 광장"
                width={30}
                height={30}
                style={{ marginLeft: "10px" }}
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
            <S.Name>홍길동</S.Name>
            <S.School>대구소프트웨어 마이스터 고등학교</S.School>
          </div>
        </S.My>
      </S.Side>
    </div>
  );
};
export default Index;