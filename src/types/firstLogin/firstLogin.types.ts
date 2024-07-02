import { Response } from "@/types/util/response.type";
import { ElemType } from "@/constants/elemType/elemType.constants";


export interface GetSchoolList {
  schoolType: string;
  link: string;
  schoolGubun: string;
  adres: string;
  schoolName: string;
  region: string;
  totalCount: string;
  estType: string;
  seq: string;
}

export interface GetSchoolListRespose extends Response {
  data: GetSchoolList[];
}

export interface GetMajorList {
  lClass: string;
  facilName: string;
  majorSeq: string;
  mClass: string;
  totalCount: string;
}

export interface GetMajorListReposne extends Response {
  data: GetMajorList[];
}
