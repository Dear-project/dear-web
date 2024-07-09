import { useState } from "react";
import { useGetMajorList, usePostMajor } from "../../queries/firstLogin/firstLogin.query";
import { ELEM_TYPE } from "../../constants/elemType/elemType.constants";
import { MAJOR_TYPE } from "src/constants/majorType/majorType.constants";
import { GetMajorListReposne } from "src/types/firstLogin/firstLogin.types";
import { dearToast } from "src/libs/Swal/Swal";
import { AxiosError } from "axios";
const useMajor = () => {
  const [gubunType, setGubunType] = useState<ELEM_TYPE>("ELEM_LIST");
  const [subject, setSubjuect] = useState<MAJOR_TYPE>("인문계열");
  const [keyword, setKeyword] = useState<string>("");
  const [majorList, setMajorList] = useState<GetMajorListReposne>();

  const getMajorListMuataion = useGetMajorList();
  const postMajorMutation = usePostMajor();

  const handleSubject = (item: MAJOR_TYPE) => {
    setSubjuect(item);
  };

  const searchMajorList = () => {
    const params = {
      gubunType: gubunType,
      keyword: keyword,
      subject: subject,
    };

    getMajorListMuataion.mutate(params, {
      onSuccess: (data) => {
        setMajorList(data);
      },
      onError: (error) => {
        dearToast.errorToast((error as AxiosError).message);
      },
    });
  };

  const onSubmit = (req: string, lclass: string, mclass: string) => {
    const params = {
      majorReq: req,
      lclass: lclass,
      mclass: mclass,
    };
    postMajorMutation.mutate(params, {
      onSuccess: () => {
        dearToast.sucessToast("관심 학과 등록에 성공하였습니다");
      },
      onError: () => {
        dearToast.errorToast("알 수 없는 에러가 발생하였습니다.");
      },
    });
  };

  return {
    majorList,
    handleSubject,
    searchMajorList,
    onSubmit,
  };
};

export default useMajor;
