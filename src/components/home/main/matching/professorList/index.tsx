import React, { useEffect } from "react";
import Image from "next/image";
import ProfessorImg from "src/asset/ProfessorProfile.svg";
import BestRecmmand from "src/asset/BestRecommand.svg";
import * as S from "../style";
import useMatching from "src/hooks/matching/useMatching";
import { useRouter } from "next/navigation";

interface Props {
  page: number;
}

const index = ({ page }: Props) => {
  const { ...professor } = useMatching();
  const professorList = professor.getProfessorList(page);
  const router = useRouter();

  return (
    <>
      {professorList?.data.map((item, idx) => (
        <S.ProfessorWrap onClick={() => router.push(`/find/professor/${item.professorId}`)}>
          <Image
            src={item.profileImage !== null ? item.profileImage : ProfessorImg}
            alt="교수 이미지"
            width={140}
            height={100}
          />
          <S.ProfessorInfoWrap>
            <S.ProfessorInfo key={idx}>
              <S.ProfessorInfoHeader>
                <span>{item.name}</span>
                <S.BestRecommand>
                  <Image src={BestRecmmand} alt="" width={70} height={30} />
                </S.BestRecommand>
              </S.ProfessorInfoHeader>
              <S.ProfessorSubAndSkills>
                <span>{item.school}</span>
              </S.ProfessorSubAndSkills>
            </S.ProfessorInfo>
          </S.ProfessorInfoWrap>
        </S.ProfessorWrap>
      ))}
    </>
  );
};

export default index;
