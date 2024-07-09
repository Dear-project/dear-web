import React from "react";
import * as S from "./style";
import Image from "next/image";
import Search from "@/asset/search.svg";
import { MAJOR_TYPE_LIST } from "@/constants/majorType/majorType.constants";
import useMajor from "@/hooks/firstLogin/useMajor";

const SelectMajorModal = () => {
  const { ...major } = useMajor();
  return (
    <S.SelectMajorModalWrap>
      <S.Main>
        <S.Header>
          <S.Title>관심 학과 선택</S.Title>
          <S.SearchWrap>
            <input type="text" placeholder="" />
            <Image src={Search} alt="돋보기" width={20} height={20} onClick={major.searchMajorList} />
          </S.SearchWrap>
        </S.Header>
        <S.MajorBoxWrap>
          <S.MajorWrap>
            <S.MajorTypeWrap>
              <span style={{ fontWeight: "black" }}>전체</span>
              {MAJOR_TYPE_LIST.map((item, idx) => (
                <span key={idx} onClick={() => major.handleSubject(item)}>
                  {item}
                </span>
              ))}
            </S.MajorTypeWrap>
            <S.MajorListWrap>
              <S.Major>
                <span>국어국문학과</span>
              </S.Major>
              <S.Major>
                <span>국어국문학과</span>
              </S.Major>
              <S.Major>
                <span>국어국문학과</span>
              </S.Major>
              <S.Major>
                <span>국어국문학과</span>
              </S.Major>
              <S.Major>
                <span>국어국문학과</span>
              </S.Major>
              <S.Major>
                <span>국어국문학과</span>
              </S.Major>
              <S.Major>
                <span>국어국문학과</span>
              </S.Major>
              <S.Major>
                <span>국어국문학과</span>
              </S.Major>
              <S.Major>
                <span>국어국문학과</span>
              </S.Major>
              <S.Major>
                <span>국어국문학과</span>
              </S.Major>
              <S.Major>
                <span>국어국문학과</span>
              </S.Major>
              <S.Major>
                <span>국어국문학과</span>
              </S.Major>
              <S.Major>
                <span>국어국문학과</span>
              </S.Major>
              <S.Major>
                <span>국어국문학과</span>
              </S.Major>
              <S.Major>
                <span>국어국문학과</span>
              </S.Major>
              <S.Major>
                <span>국어국문학과</span>
              </S.Major>
            </S.MajorListWrap>
          </S.MajorWrap>
        </S.MajorBoxWrap>
        <S.NextButton>완료</S.NextButton>
      </S.Main>
    </S.SelectMajorModalWrap>
  );
};

export default SelectMajorModal;
