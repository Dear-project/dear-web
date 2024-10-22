"use client";
import React from "react";
import * as S from "./style";
import { useParams } from "next/navigation";
import Comment from "../comment";
import { usePathname } from "next/navigation";
import ProfessorPost from "./post/professor";
import Post from "./post";

const PostDetail = () => {
  const { id } = useParams();
  const pathname = usePathname();

  return (
    <S.PostDetail>
      {pathname.includes("/community/professor") ? <ProfessorPost /> : <Post />}
      <Comment communityId={+id} />
    </S.PostDetail>
  );
};

export default PostDetail;
