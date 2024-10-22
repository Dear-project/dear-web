import { useState,useCallback } from "react";
import { useGetMajorList, usePostMajor } from "@/queries/firstLogin/firstLogin.query";
import { MAJOR_TYPE } from "@/constants/majorType/majorType.constants";
import { GetMajorListReposne } from "@/types/firstLogin/firstLogin.types";
import dearToast from "@/libs/Swal/Swal";
import { AxiosError } from "axios";
import { ErrorTransform } from "@/utils/transform/error/errorTransform";
const useMajor = () => {
  const [subject, setSubjuect] = useState<MAJOR_TYPE>();
  const [keyword, setKeyword] = useState<string>("");
  const [majorList, setMajorList] = useState<GetMajorListReposne>();
  const [majorReq, setMajorSeq] = useState<string>("");
  const [lClass, setLClass] = useState<string>("");
  const [mClass, setMClass] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false); 
  const getMajorListMuataion = useGetMajorList();
  const postMajorMutation = usePostMajor();

  const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };
  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);
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
        dearToast.errorToast(ErrorTransform((error as AxiosError).status!));
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
        setIsOpen(false);

      },
      onError: (error) => {
        dearToast.errorToast(ErrorTransform((error as AxiosError).status!));
      },
    });
  };

  return {
    setIsOpen,
    closeModal,
    isOpen,
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
