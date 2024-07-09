import { GetMajorListReposne, GetSchoolListRespose } from "../../types/firstLogin/firstLogin.types";
import { ELEM_TYPE } from "../../constants/elemType/elemType.constants";
import { MAJOR_TYPE } from "src/constants/majorType/majorType.constants";

export interface FirstLoginRepository {
  postSchool(params: PostSchoolParams): Promise<void>;
  postMajor(params: PostMajorParams): Promise<void>;
  getSchoolList(params: GetListParams): Promise<GetSchoolListRespose>;
  getMajorList(params: GetListParams): Promise<GetMajorListReposne>;
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
  gubunType: ELEM_TYPE;
  keyword: string;
}

export interface GetMajorListParams {
  gubunType: ELEM_TYPE;
  keyword: string;
  subject: MAJOR_TYPE;
}
