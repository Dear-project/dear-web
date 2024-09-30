import React from "react";
import * as S from "./style";
import Image from "next/image";
import Search from "@/asset/search.svg";
import { MAJOR_TYPE_LIST } from "@/constants/majorType/majorType.constants";
import useMajor from "@/hooks/firstLogin/useMajor";
import convertMajorListType from "@/utils/majorList/convertMajorListType";
import { useGetMajorBySubject } from "@/queries/firstLogin/firstLogin.query";
import Modal from "../modal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SelectMajorModal = ({ isOpen, onClose }: ModalProps) => {
  const { ...major } = useMajor();
  const searchMajorBySubjectMutation = useGetMajorBySubject();
  return (
    <>
      <Modal isOpen={isOpen} close={onClose}>
        <S.SelectMajorModalWrap>
          <S.Main>
            <S.Header>
              <S.Title>관심 학과 선택</S.Title>
              <S.SearchWrap>
                <input
                  type="text"
                  placeholder="학과를 입력해주세요"
                  value={major.keyword}
                  onChange={major.handleKeyword}
                />
                <Image src={Search} alt="돋보기" width={20} height={20} onClick={major.searchMajorList} />
              </S.SearchWrap>
            </S.Header>
            <S.MajorBoxWrap>
              <S.MajorWrap>
                <S.MajorTypeWrap>
                  {MAJOR_TYPE_LIST.map((item, idx) => (
                    <S.MajorTypeList
                      $isclicked={major.subject === item ? "true" : "false"}
                      onClick={() => {
                        const parmas = {
                          subject: item,
                        };
                        searchMajorBySubjectMutation.mutate(parmas, {
                          onSuccess: (data) => {
                            console.log(data);
                            major.setMajorList(data);
                          },
                        });
                      }}
                    >
                      <span key={idx} onClick={() => major.handleSubject(item)}>
                        {convertMajorListType.convertMajorToString(item)}
                      </span>
                    </S.MajorTypeList>
                  ))}
                </S.MajorTypeWrap>
                <S.MajorListWrap>
                  {major.majorList?.data.map((item, idx) => (
                    <S.Major
                      key={idx}
                      onClick={() => {
                        console.log(item.majorSeq, item.lClass, item.mClass);

                        major.handleSubmitParams(item.majorSeq, item.lClass, item.mClass);
                      }}
                    >
                      <span>{item.mClass}</span>
                    </S.Major>
                  ))}
                </S.MajorListWrap>
              </S.MajorWrap>
            </S.MajorBoxWrap>
            <S.NextButton onClick={major.onSubmit}>완료</S.NextButton>
          </S.Main>
        </S.SelectMajorModalWrap>
      </Modal>
    </>
  );
};

export default SelectMajorModal;
