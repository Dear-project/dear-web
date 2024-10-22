import React from "react";
import * as S from "./style";
import Image from "next/image";
import ProfessorImg from "@/asset/img/professorImg.svg";
import ProfessorGroomy from "@/asset/img/ProfessorGroomy.svg";
import Groomy from "@/asset/img/WriteGroomy.svg";
import Post from "../post";
import usePost from "@/hooks/community/post/usePost";
import { useProfessorQuery } from "@/queries/professor/professor.query";
import { useRecoilValue } from "recoil";
import { ProfessorCheck } from "@/store/profile/profile.store";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import ProfessorPost from "../post/professor";
import MyArticles from "./myArticles";
import ProfessorMyArticles from "./myArticles/professor";

const Community = () => {
  const { data: professorList } = useProfessorQuery(1);
  const isProfessor = useRecoilValue(ProfessorCheck);
  const pathname = usePathname();
  const { setWrite } = usePost();
  const router = useRouter();

  return (
    <S.CommunityWrap>
      <S.Main>
        <S.Community>
          <S.TitleWrap style={{ width: "90%" }}>
            <h1>{isProfessor ? "교수 커뮤니티" : "커뮤니티"}</h1>
            <button onClick={setWrite}>커뮤니티 작성</button>
          </S.TitleWrap>
          {pathname === "/community/professor" ? <ProfessorPost /> : <Post />}
        </S.Community>
        <S.SubCommunityWrap>
          <S.MyPostWrap>
            <S.TitleWrap style={{ height: "15%" }}>
              <h1>내가 쓴 글</h1>
            </S.TitleWrap>
            {pathname === "/community/professor" ? <ProfessorMyArticles /> : <MyArticles />}
          </S.MyPostWrap>
          {isProfessor && pathname === "/community/professor" && (
            <S.ProfessorsWrap>
              <S.TitleWrap style={{ height: "20%" }}>
                <h1>교수 목록</h1>
              </S.TitleWrap>
              <S.Professor>
                {Array.isArray(professorList?.data) &&
                  professorList?.data.map((professor) => (
                    <S.ProfessorWrap key={professor.userId}>
                      <div onClick={() => router.push(`/find/professor/${professor.userId}`)}>
                        <Image
                          src={professor.profileImage ? professor.profileImage : ProfessorImg}
                          alt="프로필"
                          width={75}
                          height={75}
                        />
                        <div>
                          <h1>{professor.name}</h1>
                          <span>
                            {professor.school}
                            {professor.major}
                          </span>
                        </div>
                      </div>
                    </S.ProfessorWrap>
                  ))}
              </S.Professor>
            </S.ProfessorsWrap>
          )}
        </S.SubCommunityWrap>
        {isProfessor && pathname === "/community/professor" ? (
          <Image src={ProfessorGroomy} alt="귀여운놈" className="professor-groomy" />
        ) : (
          <Image src={Groomy} alt="귀여운놈" className="groomy" />
        )}
      </S.Main>
    </S.CommunityWrap>
  );
};

export default Community;
