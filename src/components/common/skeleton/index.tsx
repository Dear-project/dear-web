import React from "react";
import * as S from "./style";
import DefaultPostImg from "@/asset/DefaultPostImg.svg";
import Image from "next/image";

interface Props {
  height: number;
}

const Skeleton = ({ height }: Props) => {
  return (
    <S.SkeletonContainer>
      {Array.from({ length: 15 }).map((_, idx) => (
        <S.SkeletonItem height={height} key={idx}>
          <Image src={DefaultPostImg} alt="게시물 이미지" width={130} height={130} />
          <S.SkeletonDiv>
            <S.SkeletonName />
            <S.SkeletonContent />
          </S.SkeletonDiv>
        </S.SkeletonItem>
      ))}
    </S.SkeletonContainer>
  );
};

export default Skeleton;
