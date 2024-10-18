import React from "react";
import * as S from "./style";
import Image from "next/image";
import Avartar from "@/asset/Avatar.svg";
import ChatIcon from "@/asset/chatIcon.svg";
import ProfessorImg from "@/asset/img/professorImg.svg";
import Bookmark from "@/asset/img/bookmark.svg";
import Groomy from "@/asset/img/ProfessorGroomy.svg";
import { useGetMyArticles } from "@/queries/community/community.query";
import { convertDescriptionDate, convertCreatedDate } from "@/utils/transform/date/convertDate";
import Post from "../post";
import usePost from "@/hooks/community/post/usePost";
import { useProfessorQuery } from "@/queries/professor/professor.query";
import { useRecoilValue } from "recoil";
import { ProfessorCheck } from "@/store/profile/profile.store";

const Community = () => {
  const { data: myArticles } = useGetMyArticles(1);
  const { data: professorList } = useProfessorQuery(1);
  const isProfessor = useRecoilValue(ProfessorCheck);
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
        <S.SubCommunityWrap>
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
          {isProfessor && (
            <S.ProfessorsWrap>
              <S.TitleWrap style={{ height: "20%" }}>
                <h1>교수 목록</h1>
              </S.TitleWrap>
              <S.Professor>
                {Array.isArray(professorList?.data) &&
                  professorList?.data.map((professor) => (
                    <S.ProfessorWrap key={professor.professorId}>
                      <div>
                        <Image
                          src={professor.profileImage ? professor.profileImage : ProfessorImg}
                          alt="프로필"
                          width={75}
                          height={75}
                        />
                        <div>
                          <h1>{professor.name}</h1>
                          <span>
                            {professor.school}&nbsp;{professor.major}
                          </span>
                        </div>
                      </div>
                      <Image src={Bookmark} alt="북마크" />
                    </S.ProfessorWrap>
                  ))}
              </S.Professor>
            </S.ProfessorsWrap>
          )}
        </S.SubCommunityWrap>
        <Image src={Groomy} alt="귀여운놈" className="groomy" />
      </S.Main>
    </S.CommunityWrap>
  );
};

export default Community;
