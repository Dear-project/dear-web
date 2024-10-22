import Image from "next/image";
import React, { useState, useCallback } from "react";
import * as S from "./style";
import DropDown from "@/asset/DropDown.svg";
import { useGetSchoolList } from "@/queries/firstLogin/firstLogin.query";
import { GetSchoolListRespose } from "@/types/firstLogin/firstLogin.types";
import Search from "@/asset/img/Search.svg";
import { ELEM_TYPE, ELEM_TYPE_LIST } from "@/constants/elemType/elemType.constants";
import useSelectModal from "@/hooks/firstLogin/selectModal";
import { useRecoilState } from "recoil";
import { ChangeSchoolAtom, ProfessorCheck } from "@/store/profile/profile.store";
import CustomRadio from "@/components/common/raido";
import { SchoolChangeParams } from "@/repositories/profile/ProfileRepository";

const SelectSchool = () => {
  const { ...select } = useSelectModal();
  const [selectedValue, setSelectedValue] = useState<ELEM_TYPE>();
  const [isProfessorCheck] = useRecoilState(ProfessorCheck);
  const conditionalElemTypeList: ELEM_TYPE[] = isProfessorCheck
    ? ([...ELEM_TYPE_LIST, "UNIV_LIST"] as ELEM_TYPE[])
    : ELEM_TYPE_LIST;
  const [selectedSchoolSeq, setSelectedSchoolSeq] = useState<string | null>(null);
  const [, setEditSchool] = useRecoilState<SchoolChangeParams>(ChangeSchoolAtom);

  const handleChange = (value: ELEM_TYPE) => {
    setSelectedValue(value);
    select.handleGubunType({ target: { value } } as React.ChangeEvent<HTMLInputElement>);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      select.searchSchool();
    }
  };

  const handleSchool = (seq: string, schoolName: string, link: string, adres: string) => {
    setSelectedSchoolSeq(seq);
    setEditSchool({seq, schoolName, link, adres});
    select.handlePostSchoolParams(seq, schoolName, link, adres);
  };

  return (
    <S.SelectWrap>
      <S.SchoolTypeSelectionWrap $isclicked={select.isDropDown ? "false" : "true"}>
        <div
          style={{ justifyContent: "space-between", width: "none" }}
          onClick={() => select.setIsDropDown(!select.isDropDown)}
        >
          <span>학교구분 선택하기</span>
          <Image src={DropDown} alt="드롭다운 버튼 이미지" style={{ padding: "5%", cursor: "pointer" }} />
        </div>
        <S.RadioButtonBox $isvisible={select.isDropDown ? "true" : "false"}>
          {conditionalElemTypeList.map((item, idx) => {
            return <CustomRadio key={idx} value={item} selected={selectedValue === item} onChange={handleChange} />;
          })}
        </S.RadioButtonBox>
      </S.SchoolTypeSelectionWrap>
      <S.SchoolSelectionWrap>
        <S.SearchWrap>
          <input
            placeholder="학교를 검색하세요."
            onChange={select.searchSchoolName}
            value={select.searchName}
            onKeyDown={handleKeyDown}
          />
          <Image src={Search} alt="검색 돋보기" width={20} height={20} onClick={select.searchSchool} />
        </S.SearchWrap>

        <S.SchoolWrap>
          {select.schoolList?.data
            ? select.schoolList.data.map((item, idx) => (
                <S.SchoolList
                  $isclicked={item.seq === selectedSchoolSeq ? "true" : "false"}
                  key={idx}
                  onClick={() => handleSchool(item.seq, item.schoolName, item.link, item.adres)}
                >
                  <span>{item.schoolName}</span>
                  <span>{item.adres}</span>
                </S.SchoolList>
              ))
            : ""}
        </S.SchoolWrap>
      </S.SchoolSelectionWrap>
    </S.SelectWrap>
  );
};
export default SelectSchool;
