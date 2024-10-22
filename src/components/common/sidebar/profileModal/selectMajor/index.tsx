import React, { useState } from "react";
import * as S from "./style";
import Image from "next/image";
import Search from "@/asset/search.svg";
import useSelectModal from "@/hooks/firstLogin/selectModal";
import { useGetMajorBySubject } from "@/queries/firstLogin/firstLogin.query";
import { GetMajorListReposne } from "@/types/firstLogin/firstLogin.types";
import { MAJOR_TYPE_LIST } from "@/constants/majorType/majorType.constants";
import convertMajorListType from "@/utils/majorList/convertMajorListType";
import { useRecoilState } from "recoil";
import { ChangeMajorAtom } from "@/store/profile/profile.store";

const SelectMajor = () => {
  const { ...select } = useSelectModal();
  const [selectedMajor, setSelectedMajor] = useState<string | null>(null);
  const searchMajorBySubjectMutation = useGetMajorBySubject();
  const [, setEditMajor] = useRecoilState<string>(ChangeMajorAtom);

  return (
    <div style={{ height: "100%" }}>
      <S.Header>
        <S.Title>자신의 학과 선택</S.Title>
        <S.SearchWrap>
          <input type="text" placeholder="학과를 입력해주세요" value={select.keyword} onChange={select.handleKeyword} />
          <Image src={Search} alt="돋보기" width={20} height={20} onClick={select.searchMajorList} />
        </S.SearchWrap>
      </S.Header>
      <S.MajorBoxWrap>
        <S.MajorWrap>
          <S.MajorTypeWrap>
            {MAJOR_TYPE_LIST.map((item, idx) => (
              <S.MajorTypeList
                key={idx}
                $isclicked={select.subject === item ? "true" : "false"}
                onClick={() => {
                  select.handleSubject(item);
                  const params = { subject: item };
                  searchMajorBySubjectMutation.mutate(params, {
                    onSuccess: (data) => {
                      select.setMajorList(data);
                    },
                  });
                }}
              >
                <span>{convertMajorListType.convertMajorToString(item)}</span>
              </S.MajorTypeList>
            ))}
          </S.MajorTypeWrap>
          <S.MajorListWrap>
            {select.majorList?.data.map((item, idx) => (
              <S.Major
                key={idx}
                $isSelected={selectedMajor === item.majorSeq}
                onClick={() => {
                  setSelectedMajor(item.majorSeq);
                  setEditMajor(item.mClass);
                  console.log(item.mClass);
                  select.handleSubmitParams(item.majorSeq, item.lClass, item.mClass);
                }}
              >
                <span>{item.mClass}</span>
              </S.Major>
            ))}
          </S.MajorListWrap>
        </S.MajorWrap>
      </S.MajorBoxWrap>
    </div>
  );
};
export default SelectMajor;
