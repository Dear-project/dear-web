import { useState } from "react";
import { useGetMajorList, usePostMajor } from "@/queries/firstLogin/firstLogin.query";
import { MAJOR_TYPE } from "@/constants/majorType/majorType.constants";
import { GetMajorListReposne } from "@/types/firstLogin/firstLogin.types";
import dearToast from "@/libs/Swal/Swal";
import { AxiosError } from "axios";
const useMajor = () => {
  const [subject, setSubjuect] = useState<MAJOR_TYPE>();
  const [keyword, setKeyword] = useState<string>("");
  const [majorList, setMajorList] = useState<GetMajorListReposne>();
  const [majorReq, setMajorSeq] = useState<string>("");
  const [lClass, setLClass] = useState<string>("");
  const [mClass, setMClass] = useState<string>("");

  const getMajorListMuataion = useGetMajorList();
  const postMajorMutation = usePostMajor();

  const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleSubject = (item: MAJOR_TYPE) => {
    setSubjuect(item);
  };

  const searchMajorList = () => {
    const params = {
      keyword: keyword,
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

  const handleSubmitParams = (req: string, lclass: string, mclass: string) => {
    setMajorSeq(req);
    setLClass(lclass);
    setMClass(mclass);
  };

  const onSubmit = () => {
    const params = {
      majorSeq: majorReq!,
      lclass: lClass!,
      mclass: mClass!,
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
    setMajorList,
    subject,
    majorList,
    keyword,
    handleKeyword,
    handleSubject,
    searchMajorList,
    onSubmit,
    handleSubmitParams,
  };
};

export default useMajor;
