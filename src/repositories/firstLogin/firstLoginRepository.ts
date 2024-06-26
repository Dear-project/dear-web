import { GetSchoolListRespose } from "../../types/firstLogin/firstLogin.types";

export interface FirstLoginRepository {
  postSchool(params: PostSchoolParams): Promise<void>;
  postMajor(params: PostMajorParams): Promise<void>;
  getSchoolList(params: GetListParams): Promise<GetSchoolListRespose>;
  getMajorList(params: GetListParams): Promise<GetSchoolListRespose>;
}

export interface PostSchoolParams {
  seq: string;
  schoolName: string;
}

export interface PostMajorParams {
  majorReq: string;
  lclass: string;
  mclass: string;
}

export type ElemType = "ELEM_LIST" | "MIDD_LIST" | "HIGH_LIST" | "UNIV_LIST" | "SEET_LIST" | "ALTE_LIST";

export interface GetListParams {
  gubunType: ElemType;
  keyword: string;
}
