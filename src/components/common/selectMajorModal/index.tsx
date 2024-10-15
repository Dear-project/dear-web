import React ,{useState}from "react";
import * as S from "./style";
import Image from "next/image";
import Search from "@/asset/search.svg";
import { MAJOR_TYPE_LIST } from "@/constants/majorType/majorType.constants";
import convertMajorListType from "@/utils/majorList/convertMajorListType";
import { useGetMajorBySubject } from "@/queries/firstLogin/firstLogin.query";
import { GetMajorListReposne } from "@/types/firstLogin/firstLogin.types";

interface SelectMajorModalProps {
  subject: string | "인문계열" | undefined;
  keyword: string;
  majorList: GetMajorListReposne | undefined;
  handleKeyword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchMajorList: () => void;
  setMajorList: (data: GetMajorListReposne) => void;
  handleSubmitParams: (req: string, lclass: string, mclass: string) => void;
  onSubmit: () => void;
}

const SelectMajorModal = ({
  subject,
  keyword,
  majorList,
  handleKeyword,
  searchMajorList,
  setMajorList,
  handleSubmitParams,
  onSubmit,
}: SelectMajorModalProps) => {
  const [selectedMajor, setSelectedMajor] = useState<string | null>(null);
  const searchMajorBySubjectMutation = useGetMajorBySubject();


  return (
    <>
      <S.Header>
        <S.Title>자신의 학과 선택</S.Title>
        <S.SearchWrap>
          <input type="text" placeholder="학과를 입력해주세요" value={keyword} onChange={handleKeyword} />
          <Image src={Search} alt="돋보기" width={20} height={20} onClick={searchMajorList} />
        </S.SearchWrap>
      </S.Header>
      <S.MajorBoxWrap>
        <S.MajorWrap>
          <S.MajorTypeWrap>
            {MAJOR_TYPE_LIST.map((item, idx) => (
              <S.MajorTypeList
                key={idx}
                $isclicked={subject === item ? "true" : "false"}
                onClick={() => {
                  const params = { subject: item };
                  searchMajorBySubjectMutation.mutate(params, {
                    onSuccess: (data) => {
                      setMajorList(data);
                    },
                  });
                }}
              >
                <span>{convertMajorListType.convertMajorToString(item)}</span>
              </S.MajorTypeList>
            ))}
          </S.MajorTypeWrap>
          <S.MajorListWrap>
            {majorList?.data.map((item, idx) => (
              <S.Major
                key={idx}
                $isSelected={selectedMajor === item.majorSeq} 
                onClick={() => {
                  setSelectedMajor(item.majorSeq);
                  handleSubmitParams(item.majorSeq, item.lClass, item.mClass);
                }}
              >
                <span>{item.mClass}</span>
              </S.Major>
            ))}
          </S.MajorListWrap>
        </S.MajorWrap>
      </S.MajorBoxWrap>
      <S.NextButton onClick={onSubmit}>완료</S.NextButton>
    </>
  );
};

export default SelectMajorModal;
