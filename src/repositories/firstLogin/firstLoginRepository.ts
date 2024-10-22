import { GetMajorListReposne, GetSchoolListRespose } from "@/types/firstLogin/firstLogin.types";
import { ELEM_TYPE } from "@/constants/elemType/elemType.constants";
import { MAJOR_TYPE } from "@/constants/majorType/majorType.constants";

export interface FirstLoginRepository {
  postSchool(params: PostSchoolParams): Promise<void>;
  postMajor(params: PostMajorParams): Promise<void>;
  getSchoolList(params: GetListParams): Promise<GetSchoolListRespose>;
  getMajorList(params: GetMajorListParams): Promise<GetMajorListReposne>;
  getMajorbySubject(params: getMajorParams): Promise<GetMajorListReposne>;
}

export interface PostSchoolParams {
  seq: string;
  schoolName: string;
}

export interface PostMajorParams {
  majorSeq: string;
  lclass: string;
  mclass: string;
}

export interface GetListParams {
  gubunType: ELEM_TYPE;
  keyword: string;
}

export interface GetMajorListParams {
  keyword: string;
}

export interface getMajorParams {
  subject: MAJOR_TYPE;
}
