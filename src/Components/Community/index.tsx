import React, { useState } from "react";
import * as S from "./style";
import Sidebar from "@/components/Sidebar/index";
import Post from "./post/index";
import Image from "next/image";
import WriteButton from "src/asset/WriteButton.svg";
import SearchIcon from "src/asset/search.svg";
import { useRouter, useParams } from "next/navigation";
import usePost from "@/hooks/community/post/usePost";
import { useRecoilState, useRecoilValue } from "recoil";
import { ProfessorListPageAtom } from "@/Stores/community/community.store";
import useWrite from "@/hooks/community/write/useWrite";

const Community = () => {
  const router = useRouter();
  const [page, setPage] = useRecoilState(ProfessorListPageAtom);
  const { setWrite } = usePost();
  return (
    <S.Community>
      <Sidebar />
      <S.Main>
        <S.SearchWrap>
          <S.Search placeholder="게시물 검색" />
          <Image src={SearchIcon} alt="검색 아이콘" />
        </S.SearchWrap>
        <S.PostWrap>
          <Post
            onclick={() => {
              router.push(`/community/${page}`); //page는 임시
            }}
            page={page}
          />
        </S.PostWrap>
      </S.Main>
      <Image src={WriteButton} alt="글쓰기 버튼" onClick={setWrite} />
    </S.Community>
  );
};

export default Community;
