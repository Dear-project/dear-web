import { ELEM_TYPE } from "../../../constants/elemType/elemType.constants";

class ConvertElemList {
  public convertElemListType(elemType: string): string {
    switch (elemType) {
      case "ELEM":
        return "초등학교";
      case "MIDD":
        return "중학교";
      case "HIGH":
        return "고등학교";
      case "UNIV":
        return "대학교";
      default:
        return "";
    }
  }

  public convertStringToGubunType(value: string): ELEM_TYPE {
    switch (value) {
      case "ELEM":
        return "ELEM_LIST";
      case "MIDD":
        return "MIDD_LIST";
      case "HIGH":
        return "HIGH_LIST";
      case "UNIV":
        return "UNIV_LIST";
      default:
        return "ELEM_LIST";
    }
  }
}

export default new ConvertElemList();
