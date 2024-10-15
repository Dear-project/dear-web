import React,{useState} from "react";
import * as S from "./style";
import Image from "next/image";
import DropDown from "@/asset/DropDown.svg";
import { ELEM_TYPE_LIST ,ELEM_TYPE} from "@/constants/elemType/elemType.constants";
import { useRecoilState } from "recoil";
import { ProfessorCheck,IsFirst } from "@/store/profile/profile.store";
import { GetSchoolListRespose } from "@/types/firstLogin/firstLogin.types";
import Search from "@/asset/img/Search.svg";
import CustomRadio from "../raido";
import { useGetProfileInfo } from "@/queries/profile/query";

interface SelectSchoolModalProps {
  isDropDown: boolean;
  setIsDropDown: (value: boolean) => void;
  handleGubunType: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchName: string;
  schoolList: GetSchoolListRespose | undefined;
  searchSchoolName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchSchool: () => void;
  seq: string;
  handlePostSchoolParams: (seq: string, schoolName: string, link: string, adres: string) => void;
  onSubmitSchool: () => void;
}

const SelectSchoolModal = ({
  isDropDown,
  setIsDropDown,
  handleGubunType,
  searchName,
  schoolList,
  searchSchoolName,
  searchSchool,
  seq,
  handlePostSchoolParams,
  onSubmitSchool,
}: SelectSchoolModalProps) => {
 
  const [selectedValue, setSelectedValue] = useState<ELEM_TYPE>();
  const [isProfessorCheck, ] = useRecoilState(ProfessorCheck);
  const [selectedSchoolSeq, setSelectedSchoolSeq] = useState<string | null>(null);
  const conditionalElemTypeList: ELEM_TYPE[] = isProfessorCheck
  ? [...ELEM_TYPE_LIST, "UNIV_LIST"] as ELEM_TYPE[] 
  : ELEM_TYPE_LIST;
  
  const handleChange = (value: ELEM_TYPE) => {
    setSelectedValue(value);
    handleGubunType({ target: { value } } as React.ChangeEvent<HTMLInputElement>); // 값 변경
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchSchool(); 
    }
  };
  const handleSchool = (seq: string, schoolName: string, link: string, adres: string) => {
    setSelectedSchoolSeq(seq); 
    handlePostSchoolParams(seq, schoolName, link, adres);
  };

  return (
    <>
      <S.SelectWrap>
        <S.SchoolTypeSelectionWrap $isclicked={isDropDown ? "false" : "true"}  >
          <div style={{ justifyContent: "space-between" }} onClick={() => setIsDropDown(!isDropDown)}>
            <span>학교구분 선택하기</span>
            <Image
              src={DropDown}
              alt="드롭다운 버튼 이미지"
              style={{ padding: "5%", cursor: "pointer" }}
             
            />
          </div>
          <S.RadioButtonBox $isvisible={isDropDown ? "true" : "false"}>
          {conditionalElemTypeList.map((item, idx) => {
              return (
                <CustomRadio
                key={idx}
                value={item}
                selected={selectedValue === item}
                onChange={handleChange}
              />
              );
            })}
          </S.RadioButtonBox>
        </S.SchoolTypeSelectionWrap>

        <S.SchoolSelectionWrap>
          <S.SearchWrap>
            <input
              placeholder="학교를 검색하세요."
              onChange={searchSchoolName}
              value={searchName}
              onKeyDown={handleKeyDown}
            />
            <Image src={Search} alt="검색 돋보기" width={20} height={20} onClick={searchSchool} />
          </S.SearchWrap>

          <S.SchoolWrap>
            {schoolList?.data ? (
              schoolList.data.map((item, idx) => 
               (
                  <S.SchoolList
                  $isclicked={item.seq === selectedSchoolSeq ? "true" : "false"}
                  key={idx}
                  onClick={() => handleSchool(item.seq, item.schoolName, item.link, item.adres)}
                >
                  <span>{item.schoolName}</span>
                  <span>{item.adres}</span>
                </S.SchoolList>
               
               )
               
              )
            ) : (
              <p>학교를 선택해주세요.</p>
            )}
          </S.SchoolWrap>
        </S.SchoolSelectionWrap>
      </S.SelectWrap>
      <div style={{ display: "flex", width: "80%", height: "10%", justifyContent: "flex-end" }}>
        <S.NextButton onClick={onSubmitSchool}>다음</S.NextButton>
      </div>
    </>
  );
};

export default SelectSchoolModal;
