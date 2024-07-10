import React from "react";
import * as S from "./style";
import Search from "@/asset/search.svg";
import Image from "next/image";
import DropDown from "@/asset/DropDown.svg";
import { ELEM_TYPE_LIST } from "@/constants/elemType/elemType.constants";
import { useSchool } from "@/hooks/firstLogin/useSchool";
import convertElemListType from "@/utils/transform/elemList/convertElemListType";
import { useGetProfileInfo } from "@/queries/profile/query";
import SelectMajorModal from "@/components/common/selectMajorModal/index";

const SelectSchoolModal = () => {
  const { ...first } = useSchool();
  const { data } = useGetProfileInfo();

  return (
    <>
      {data?.data.schoolName === null && (
        <S.SelectSchoolModalWrap>
          <S.Main>
            <S.SelectWrap>
              <S.SchoolTypeSelectionWrap $isclicked={first.isDropDown ? "false" : "true"}>
                <div style={{ justifyContent: "space-between" }}>
                  <span>학교구분 선택하기</span>
                  <Image
                    src={DropDown}
                    alt="드롭다운 버튼 이미지"
                    style={{ padding: "5%", cursor: "pointer" }}
                    onClick={() => first.setIsDropDown((prev) => !prev)}
                  />
                </div>
                <S.RadioButtonBox $isvisible={first.isDropDown ? "true" : "false"}>
                  {ELEM_TYPE_LIST.map((item, idx) => (
                    <div key={idx}>
                      <input type="radio" value={item} onChange={first.handleGubunType} name="gubunType" />
                      <label>{convertElemListType.convertElemListType(item)}</label>
                    </div>
                  ))}
                </S.RadioButtonBox>
              </S.SchoolTypeSelectionWrap>
              <S.SchoolSelectionWrap>
                <S.SearchWrap>
                  <input placeholder="학교를 검색하세요." onChange={first.searchSchoolName} value={first.searchName} />
                  <Image src={Search} alt="검색 돋보기" width={20} height={20} onClick={first.searchSchool} />
                </S.SearchWrap>
                <S.SchoolWrap>
                  {first.schoolList?.data ? (
                    first.schoolList?.data.map((item, idx) => (
                      <S.SchoolList
                        $isclicked={item.seq === first.seq ? "true" : "false"}
                        key={idx}
                        onClick={() => {
                          first.handlePostSchoolParams(item.seq, item.schoolName);
                        }}
                      >
                        <span>{item.schoolName}</span>
                        <span>{item.adres}</span>
                      </S.SchoolList>
                    ))
                  ) : (
                    <p>학교를 찾지 못하였습니다.</p>
                  )}
                </S.SchoolWrap>
              </S.SchoolSelectionWrap>
            </S.SelectWrap>
            <div style={{ display: "flex", width: "80%", height: "10%", justifyContent: "flex-end" }}>
              <S.NextButton onClick={first.onSubmitSchool}>다음</S.NextButton>
            </div>
          </S.Main>
        </S.SelectSchoolModalWrap>
      )}
      {first.isNext === true && <SelectMajorModal /> }
    </>
  );
};

export default SelectSchoolModal;
