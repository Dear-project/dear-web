import { ElemType } from "../../../repositories/firstLogin/firstLoginRepository";

export const convertElemListType = (elemType: ElemType) => {
  switch (elemType) {
    case "ELEM_LIST":
      return "초등학교";
    case "MIDD_LIST":
      return "중학교";
    case "HIGH_LIST":
      return "고등학교";
    case "UNIV_LIST":
      return "대학교";
    case "SEET_LIST":
      return "특수학교";
    case "ALTE_LIST":
      return "기타";
  }
};
