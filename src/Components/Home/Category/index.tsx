import React from "react";
import * as S from "./style";
import Pro from "@/components/Home/Professor";

const index = () => {
  let list = ["간호학과", "의예과", "컴퓨터 공학 학과", "치예의과", "생명과학과"];
  return (
    <S.Main>
      <S.List>
        {list.map((a, i) => {
          return <S.Button>{list[i]} </S.Button>;
        })}
      </S.List>
      <div>
        <Pro />
      </div>
    </S.Main>
  );
};

export default index;