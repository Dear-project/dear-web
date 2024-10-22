import React, { useState } from "react";
import * as S from "./style";
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
      </S.Header>
      <S.Content>
      {Array.isArray(data?.data) && data?.data.length > 0 ? (
          data?.data.map((item, index) => (
            <MatchingList key={index} data={item} />
          ))
        ) : (
          <span style={{ textAlign: "center" }}>내용이 없습니다.</span>
        )}
      </S.Content>
    </S.MatchingBox>
  );
};

export default Matching;
