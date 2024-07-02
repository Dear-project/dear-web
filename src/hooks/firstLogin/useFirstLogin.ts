import React, { useCallback, useState } from "react";
import { useGetSchoolList, usePostSchool } from "../../queries/firstLogin/firstLogin.query";
import { dearToast } from "@/libs/Swal/Swal.ts";
import { AxiosError } from "axios";
import { ElemType } from "../../constants/elemType/elemType.constants";

export const useFirst = () => {
  const [seq, setSeq] = useState<string>("");
  const [schoolName, setSchoolName] = useState<string>("");
  const [searchName, setSearchName] = useState<string>("");
  const [gubunType, setGubunType] = useState<ElemType>("ELEM_LIST");

  const mutation = usePostSchool();

  const searchSchoolName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchName(e.target.value);
    },
    [setSearchName],
  );

  const searchSchool = () => {
    const params = {
      gubunType: gubunType,
      keyword: searchName,
    };
    const schoolList = useGetSchoolList(params);
    if (schoolList !== undefined && schoolList.data.length > 0) {
      return schoolList;
    }
  };

  const onSubmitSchool = () => {
    const params = {
      seq: seq,
      schoolName: schoolName,
    };
    mutation.mutate(params, {
      onSuccess: () => {
        dearToast.succcessToast("학교 등록이 되었습니다.");
      },
      onError: (error) => {
        dearToast.errorToast((error as AxiosError).message);
      },
    });
  };

  return {
    searchName,
    searchSchool,
    searchSchoolName,
    onSubmitSchool,
  };
};
