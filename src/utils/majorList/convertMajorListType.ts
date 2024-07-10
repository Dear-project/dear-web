import { MAJOR_TYPE } from "../../constants/majorType/majorType.constants";

class ConvertMajorListType {
  public convertMajorToString(major: MAJOR_TYPE): string {
    switch (major) {
      case "HUMANITIES":
        return "인문계열";
      case "SOCIETY":
        return "사회계열";
      case "EDUCATION":
        return "교육계열";
      case "ENGINEERING":
        return "공학계열";
      case "NATURE":
        return "자연계열";
      case "MEDICINE":
        return "의약계열";
      case "PHYSICAL":
        return "예체능";
      default:
        return "";
    }
  }
}

export default new ConvertMajorListType();
