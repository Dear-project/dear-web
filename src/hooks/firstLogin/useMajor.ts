import { useState } from "react";
import { useGetMajorList } from "../../queries/firstLogin/firstLogin.query";
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

  return {
    majorList,
    handleSubject,
    searchMajorList,
  };
};

export default useMajor;
