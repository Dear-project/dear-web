import React, { useState, useEffect } from "react";
import Image from "next/image";
import * as S from "./style";
import Homelight from "src/asset/homeLight.svg";
import Home1 from "src/asset/home.svg";
import Chat from "src/asset/chat.svg";
import Chatlight from "src/asset/chatLight.svg";
import Shcool from "src/asset/school.svg";
import Findlight from "src/asset/findLight.svg";
import Community from "src/asset/community.svg";
import Communitylight from "src/asset/communityLight.svg";
import Profile from "src/asset/Avatar.svg";
import Link from "next/link";
import Logo from "@/asset/DEAR.svg";
import Logo2 from "@/asset/LogoSmall.svg";
import { useGetProfileInfo } from "@/queries/profile/query";
import SideBarModal from "./sidebarModal/index";
import ProfileModal from "./profileModal/index";
import UseSidebar from "@/hooks/sidebar/useSidebar";
import { useRecoilState } from "recoil";
import { IsFirst, ProfileId } from "@/store/profile/profile.store";
import { useMediaQuery } from "react-responsive";

export const SideBar = () => {
  const { ...sidebar } = UseSidebar();
  const { data } = useGetProfileInfo();
  const [, setProfileId] = useRecoilState(ProfileId);
  const [isFirst, setIsFirst] = useRecoilState(IsFirst);
  setProfileId(data?.data.id!);
  if (data?.data.schoolName === null || data?.data.mclass === null) {
    setIsFirst(true);
  } else {
    setIsFirst(false);
  }

  console.log(isFirst);

  const isSmallScreen = useMediaQuery({ query: "(max-width: 1264px)" });

  const logoSrc = isSmallScreen && sidebar.isSidebarOpen ? Logo2 : Logo;

  return (
    <S.Side isSidebarOpen={sidebar.isSidebarOpen}>
      <ProfileModal
        isOpen={sidebar.isOpenProfile}
        close={sidebar.PrfoileClose}
        handleProfileClick={sidebar.handleProfileClick}
      />
      <SideBarModal
        isOpen={sidebar.modalBtn}
        close={sidebar.closeModal}
        customStyle={{ background: "none" }}
        handleProfileClick={sidebar.handleProfileClick}
      />
      <Link href={"/"}>
        <S.Logo isSidebarOpen={sidebar.isSidebarOpen}>
          <Image src={logoSrc} alt="로고" />
        </S.Logo>
      </Link>

      <S.Option isSidebarOpen={sidebar.isSidebarOpen}>
        <Link href="/" style={{ textDecoration: "none", outline: "none" }}>
          <S.Select isSidebarOpen={sidebar.isSidebarOpen} isSelected={"/" == sidebar.pathname}>
            <Image src={"/" == sidebar.pathname ? Homelight : Home1} alt="메인" width={30} height={30} />
            <span>메인</span>
          </S.Select>
        </Link>

        <Link href="/chat" style={{ textDecoration: "none" }}>
          <S.Select isSidebarOpen={sidebar.isSidebarOpen} isSelected={"/chat" == sidebar.pathname}>
            <Image src={"/chat" == sidebar.pathname ? Chatlight : Chat} alt="채팅" width={30} height={30} />
            <span>채팅</span>
          </S.Select>
        </Link>

        <Link href="/find" style={{ textDecoration: "none" }}>
          <S.Select isSidebarOpen={sidebar.isSidebarOpen} isSelected={"/find" == sidebar.pathname}>
            <Image src={"/find" == sidebar.pathname ? Findlight : Shcool} alt="교수찾기" width={30} height={30} />
            <span>교수찾기</span>
          </S.Select>
        </Link>

        <Link href="/community" style={{ textDecoration: "none" }}>
          <S.Select isSidebarOpen={sidebar.isSidebarOpen} isSelected={"/community" == sidebar.pathname}>
            <Image
              src={"/community" == sidebar.pathname ? Communitylight : Community}
              alt="커뮤니티 광장"
              width={30}
              height={30}
            />
            <span>커뮤니티 광장</span>
          </S.Select>
        </Link>
      </S.Option>

      <S.Profile isSidebarOpen={sidebar.isSidebarOpen}>
        <S.My
          isSidebarOpen={sidebar.isSidebarOpen}
          onClick={() => {
            sidebar.setModalBtn(true);
          }}
        >
          {data?.data.img ? <Image src={data?.data.img} alt="프로필" /> : <Image src={Profile} alt="프로필" />}

          {sidebar.isSidebarOpen && (
            <S.Detail>
              <S.Name>{data?.data.name || "홍길동"}</S.Name>
              <S.School>{data?.data.schoolName || "대구소프트웨어 마이스터 고등학교"}</S.School>
            </S.Detail>
          )}
        </S.My>
      </S.Profile>
    </S.Side>
  );
};

export default SideBar;
