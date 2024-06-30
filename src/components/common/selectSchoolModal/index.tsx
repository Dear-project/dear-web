import React, { useCallback, useEffect, useState } from "react";
import * as S from "./style";
import Search from "@/asset/search.svg";
import Image from "next/image";
import DropDown from "@/asset/DropDown.svg";
import { ElemType } from "@/constants/elemType/elemType.constants";
import { GetSchoolListRespose } from "@/types/firstLogin/firstLogin.types";

const SelectSchoolModal = () => {
  const [schoolList, setSchoolList] = useState<GetSchoolListRespose[]>([]);
  return (
    <S.SelectSchoolModalWrap>
      <S.Main>
        <S.SelectWrap>
          <S.SchoolTypeSelectionWrap>
            <div style={{ justifyContent: "space-between" }}>
              <span>학교구분 선택하기</span>
              <Image src={DropDown} alt="드롭다운 버튼 이미지" style={{ padding: "5%", cursor: "pointer" }} />
            </div>
            <S.RadioButtonBox>
              <div>
                <input type="radio" name="gubunType" id="" value={"ELEM_LIST"} />
                <label>초등학교</label>
              </div>
              <div>
                <input type="radio" name="gubunType" id="" value={"MIDD_LIST"} />
                <label>중학교</label>
              </div>
              <div>
                <input type="radio" name="gubunType" id="" value={"HIGH_LIST"} />
                <label>고등학교</label>
              </div>
            </S.RadioButtonBox>
          </S.SchoolTypeSelectionWrap>
          <S.SchoolSelectionWrap>
            <div>
              <input placeholder="학교를 검색하세요." name="keyword" />
              <Image src={Search} alt="검색 돋보기" width={20} height={20} />
            </div>
            <S.SchoolWrap>
              {/* {schoolList?.data.map((item, idx) => (
                <div key={idx}>
                  <span>{item.schoolName}</span>
                  <span>{item.adres}</span>
                </div>
              ))} */}
            </S.SchoolWrap>
          </S.SchoolSelectionWrap>
        </S.SelectWrap>
        <div style={{ display: "flex", width: "80%", height: "10%", justifyContent: "flex-end" }}>
          <S.NextButton>다음</S.NextButton>
        </div>
      </S.Main>
    </S.SelectSchoolModalWrap>
  );
};

export default SelectSchoolModal;
