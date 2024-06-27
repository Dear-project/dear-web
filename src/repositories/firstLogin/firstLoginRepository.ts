import { GetSchoolListRespose } from "../../types/firstLogin/firstLogin.types";
import { ElemType } from "../../constants/elemType/elemType.constants";

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

export interface GetListParams {
  gubunType: ElemType;
  keyword: string;
}
