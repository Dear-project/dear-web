import React, { useCallback, useState } from "react";
import { useGetSchoolList, usePostSchool } from "@/queries/firstLogin/firstLogin.query";
import dearToast from "@/libs/Swal/Swal";
import { AxiosError } from "axios";
import { ELEM_TYPE } from "@/constants/elemType/elemType.constants";
import convertElemList from "@/utils/transform/elemList/convertElemListType";
import { GetSchoolListRespose } from "@/types/firstLogin/firstLogin.types";

interface InfoType {
  seq: string;
  schoolName: string;
  link: string;
  adres: string;
}

const useSchool = () => {
  const [seq, setSeq] = useState<string>("");
  const [info, setInfo] = useState<InfoType>({
    seq: "",
    schoolName: "",
    link: "",
    adres: "",
  });
  const [searchName, setSearchName] = useState<string>("");
  const [gubunType, setGubunType] = useState<ELEM_TYPE>("ELEM_LIST");
  const [schoolList, setSchoolList] = useState<GetSchoolListRespose>();
  const [isDropDown, setIsDropDown] = useState<boolean>(false);
  const [isNext, setIsNext] = useState<boolean>(false);

  const postSchoolMuation = usePostSchool();
  const getSchoolListMuattion = useGetSchoolList();

  const searchSchoolName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchName(e.target.value);
    },
    [setSearchName],
  );

  const handleGubunType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGubunType(convertElemList.convertStringToGubunType(e.target.value));
  };

  const searchSchool = () => {
    const params = {
      gubunType: gubunType,
      keyword: searchName,
    };

    getSchoolListMuattion.mutate(params, {
      onSuccess: (data) => {
        setSchoolList(data);
      },
      onError: (error) => {
        console.log((error as AxiosError).message);
      },
    });
  };

  const handlePostSchoolParams = (seq: string, schoolName: string, link: string, adres: string) => {
    setInfo({
      seq,
      schoolName,
      link,
      adres,
    });
  };

  const onSubmitSchool = () => {
    postSchoolMuation.mutate(info, {
      onSuccess: () => {
        dearToast.sucessToast("학교 등록이 되었습니다.");
        setIsNext(true);
      },
      onError: (error) => {
        dearToast.errorToast((error as AxiosError).message);
      },
    });
  };

  return {
    isNext,
    seq,
    isDropDown,
    setIsDropDown,
    handlePostSchoolParams,
    gubunType,
    searchName,
    schoolList,
    searchSchool,
    handleGubunType,
    searchSchoolName,
    onSubmitSchool,
  };
};

export default useSchool