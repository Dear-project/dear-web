import React, { useState } from "react";
import Image from "next/image";
import * as S from "./style";
import Homelight from "src/asset/homeLight.svg";
import Home1 from "src/asset/home.svg";
import Chat from "src/asset/chat.svg";
import Chatlight from "src/asset/chatLight.svg";
import Find from "src/asset/find.svg";
import Findlight from "src/asset/findLight.svg";
import Community from "src/asset/community.svg";
import Communitylight from "src/asset/communityLight.svg";
import Profile from "src/asset/Profile.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "@/asset/DEAR.svg";
import { useGetProfileInfo } from "@/queries/profile/query";
import Modal from "@/components/common/modalBtn";

export const Index = () => {
  const [modalBtn, setModalBtn] = useState(false);
  const pathname = usePathname();
  const { data } = useGetProfileInfo();

  return (
    <S.Side>
      {modalBtn && <Modal setModalBtn={setModalBtn} />}
      <Link href={"/"}>
        <S.Logo>
          <Image src={Logo} alt="로고"></Image>
        </S.Logo>
      </Link>

      <S.Option>
        <Link href="/" style={{ textDecoration: "none", outline: "none" }}>
          <S.Select isSelected={"/" == pathname ? true : false}>
            <Image src={"/" == pathname ? Homelight : Home1} alt="메인" width={30} height={30} />
            <span>메인</span>
          </S.Select>
        </Link>

        <Link href="/chat" style={{ textDecoration: "none" }}>
          <S.Select isSelected={"/chat" == pathname ? true : false}>
            <Image src={"/chat" == pathname ? Chatlight : Chat} alt="채팅" width={30} height={30} />
            <span>채팅</span>
          </S.Select>
        </Link>

        <Link href="/find" style={{ textDecoration: "none" }}>
          <S.Select isSelected={"/find" == pathname ? true : false}>
            <Image src={"/find" == pathname ? Findlight : Find} alt="교수찾기" width={30} height={30} />
            <span>교수찾기</span>
          </S.Select>
        </Link>

        <Link href="/community" style={{ textDecoration: "none" }}>
          <S.Select isSelected={"/community" == pathname ? true : false}>
            <Image
              src={"/community" == pathname ? Communitylight : Community}
              alt="커뮤니티 광장"
              width={30}
              height={30}
            />
            <span>커뮤니티 광장</span>
          </S.Select>
        </Link>
      </S.Option>

      <S.My
        onClick={() => {
          setModalBtn((prev) => !prev);
        }}
      >
        <Image src={Profile} alt="프로필" width={45} height={45} style={{ borderRadius: "100%" }} />

        <div>
          <S.Name>{data?.data.name || "홍길동"}</S.Name>
          <S.School>{data?.data.schoolName || "대구소프트웨어 마이스터 고등학교"}</S.School>
        </div>
      </S.My>
    </S.Side>
  );
};
export default Index;
