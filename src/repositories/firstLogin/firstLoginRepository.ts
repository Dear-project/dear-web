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

type ElemType = "초등학교" | "중학교" | "고등학교";

export interface GetListParams {
  gubunType: ElemType;
  keyword: string;
}
