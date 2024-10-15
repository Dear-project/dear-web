import React, { useCallback, useState } from "react";
import { useGetSchoolList, usePostSchool } from "@/queries/firstLogin/firstLogin.query";
import { useGetMajorList, usePostMajor } from "@/queries/firstLogin/firstLogin.query";
import dearToast from "@/libs/Swal/Swal";
import { AxiosError } from "axios";
import { MAJOR_TYPE } from "@/constants/majorType/majorType.constants";
import { GetMajorListReposne } from "@/types/firstLogin/firstLogin.types";
import { ELEM_TYPE } from "@/constants/elemType/elemType.constants";
import { GetSchoolListRespose } from "@/types/firstLogin/firstLogin.types";


interface InfoType {
    seq: string;
    schoolName: string;
    link: string;
    adres: string;
  }
const useSelectModal=()=>{
 

    //위치 첫번쨰인지 아닌지 확인하는 상태
    const [section, setSection] = useState("first");

    //학과선택
    const [subject, setSubjuect] = useState<MAJOR_TYPE>();
  const [keyword, setKeyword] = useState<string>("");
  const [majorList, setMajorList] = useState<GetMajorListReposne>();
  const [majorReq, setMajorSeq] = useState<string>("");
  const [lClass, setLClass] = useState<string>("");
  const [mClass, setMClass] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false); 
  const getMajorListMuataion = useGetMajorList();
  const postMajorMutation = usePostMajor();

  //학교선택
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
  
    const postSchoolMuation = usePostSchool();
    const getSchoolListMuattion = useGetSchoolList();
  
    //학교선택
    const searchSchoolName = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchName(e.target.value);
      },
      [setSearchName],
    );
  
    const handleGubunType = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value as ELEM_TYPE; 
        
        setGubunType(value);
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
          setSection('second')
        },
        onError: (error) => {
          dearToast.errorToast((error as AxiosError).message);
        },
      });
    };

//학과 선택
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
        setIsOpen(false);

      },
      onError: () => {
        dearToast.errorToast("알 수 없는 에러가 발생하였습니다.");
      },
    });
  };

  
    return {
        setSection,
        section,
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
}
export default useSelectModal;