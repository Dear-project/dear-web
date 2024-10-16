import React, { useState } from "react";
import * as S from "./style";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useParams } from "react-router-dom";
import MatchingList from "./matchingList";
import { useGetMatching } from "@/queries/matching/matching.query";

const Matching = () => {
  const pageRequest={
    page:1,
    size:100,
  }
    const {data} = useGetMatching(pageRequest);

  return (
    <S.MatchingBox>
      <S.Header>
        <span>매칭요청이 왔어요</span>
        <IoIosArrowForward size={25}></IoIosArrowForward>
      </S.Header>
      <S.Content>
        {data?.data.map((item,index)=>(
        <MatchingList key={index} data={item} /> 
        ))}
      </S.Content>
    </S.MatchingBox>
  );
};

export default Matching;
