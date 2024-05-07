import React from "react";
import * as S from "./style";
import Sidebar from "src/Components/Sidebar/index";
import Image from "next/image";
import SearchIcon from "src/asset/search.svg";
import Post from "./post";
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
      <S.WriteButton onClick={() => router.push("/write")}>글쓰기</S.WriteButton>
    </S.Community>
  );
};

export default Community;
