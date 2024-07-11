import React from "react";
import * as S from "./style";

import RequestChatting from "@/components/home/professorView/mainPage/requestChatting/index";
import ProfessorList from "./professorList/index";
import useMain from "@/hooks/professorView/mainPage/useMain";
import Modal from "../modal/allowOrDenyModal";

const ProfessorMainView = () => {
  const { isClick } = useMain();
  return (
    <>
      <S.ProfessorMainViewWrap>
        <S.Main>
          <S.ProfessorRankWrap>
            <ProfessorList />
          </S.ProfessorRankWrap>
          <RequestChatting />
        </S.Main>
      </S.ProfessorMainViewWrap>
      {isClick === true && <Modal />}
    </>
  );
};

export default ProfessorMainView;
