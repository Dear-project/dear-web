import React from "react";
import * as S from "./style";

import RequestChatting from "@/components/home/professorView/mainPage/requestChatting/index";
import ProfessorList from "./professorList/index";

const ProfessorMainView = () => {
  return (
    <S.ProfessorMainViewWrap>
      <S.Main>
        <S.ProfessorRankWrap>
          
          <ProfessorList />
        </S.ProfessorRankWrap>
        <RequestChatting />
      </S.Main>
    </S.ProfessorMainViewWrap>
  );
};

export default ProfessorMainView;
