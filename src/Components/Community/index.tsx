import React from "react";
import * as S from "./style";
import Sidebar from "@/components/Sidebar/index";
import Post from "./post/index";
import Image from "next/image";
import WriteButton from "src/asset/WriteButton.svg";
import SearchIcon from "src/asset/search.svg";
import { useRouter } from "next/navigation";

const Community = () => {
  const router = useRouter();
  return (
    <S.Community>
      <Sidebar />
      <S.Main>
        <S.SearchWrap>
          <S.Search placeholder="게시물 검색" />
          <Image src={SearchIcon} alt="검색 아이콘" />
        </S.SearchWrap>
        <S.PostWrap>
          <Post onclick={() => router.push("/post")} />
          <Post onclick={() => router.push("/post")} />
          <Post onclick={() => router.push("/post")} />
          <Post onclick={() => router.push("/post")} />
        </S.PostWrap>
      </S.Main>
      <Image src={WriteButton} alt="글쓰기 버튼" onClick={() => router.push("/community/write")} />
    </S.Community>
  );
};

export default Community;
