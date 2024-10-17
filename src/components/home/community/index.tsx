import React from "react";
import * as S from "./style";
import Image from "next/image";
import Avartar from "@/asset/Avatar.svg";
import ChatIcon from "@/asset/chatIcon.svg";
import { useGetMyArticles } from "@/queries/community/community.query";
import { convertDescriptionDate, convertCreatedDate } from "@/utils/transform/date/convertDate";
import { useRouter } from "next/navigation";
import Post from "../post";
import usePost from "@/hooks/community/post/usePost";

const Community = () => {
  const { data: myArticles } = useGetMyArticles(1);
  const { setWrite } = usePost();
  return (
    <S.CommunityWrap>
      <S.Main>
        <S.Community>
          <S.TitleWrap style={{ width: "90%" }}>
            <h1>커뮤니티</h1>
            <button onClick={setWrite}>커뮤니티 작성</button>
          </S.TitleWrap>
          <Post />
        </S.Community>
        <S.MyPostWrap>
          <S.TitleWrap style={{ height: "15%" }}>
            <h1>내가 쓴 글</h1>
          </S.TitleWrap>
          <S.MyPost>
            {myArticles?.data.map((myArticles) => (
              <S.PostWrap key={myArticles.id}>
                <h1>{myArticles.title}</h1>
                <S.TimeStamp>{convertDescriptionDate(myArticles.modifiedDateTime)}</S.TimeStamp>
                <S.Description>{myArticles.content.substring(0, 13)}</S.Description>
                <S.PostInfo>
                  <Image
                    src={myArticles.profileImage ? myArticles.profileImage : Avartar}
                    alt="프로필 이미지"
                    width={35}
                    height={35}
                  />
                  <span>{myArticles.userName}</span>
                  <span style={{ fontSize: "15px" }}>{convertCreatedDate(myArticles.createdDateTime)}</span>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Image src={ChatIcon} alt="댓글" />
                    <span style={{ fontSize: "12px" }}>{myArticles.comment}</span>
                  </div>
                </S.PostInfo>
              </S.PostWrap>
            ))}
          </S.MyPost>
        </S.MyPostWrap>
      </S.Main>
    </S.CommunityWrap>
  );
};

export default Community;
