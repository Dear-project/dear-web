import { GetSchoolListRespose } from "../../types/firstLogin/firstLogin.types";
import { FirstLoginRepository, GetListParams, PostMajorParams, PostSchoolParams } from "./firstLoginRepository";
import { dearV1Axios } from "@/libs/axios/customAxios";

class FirstLoginRepositoryImpl implements FirstLoginRepository {
  public async postSchool(params: PostSchoolParams): Promise<void> {
    const { data } = await dearV1Axios.post("/school", params);
    return data;
  }

  public async postMajor(params: PostMajorParams): Promise<void> {
    const { data } = await dearV1Axios.post("/school/major", params);
    return data;
  }

  public async getSchoolList(params: GetListParams): Promise<GetSchoolListRespose> {
    const { gubunType, keyword } = params;
    const { data } = await dearV1Axios.get(`/school/list?gubunType=${gubunType}&keyword=${keyword}`);
    return data;
  }

  public async getMajorList(params: GetListParams): Promise<GetSchoolListRespose> {
    const { gubunType, keyword } = params;
    const { data } = await dearV1Axios.get(`/school/major/list?gubunType=${gubunType}&keyword=${keyword}`);
    return data;
  }
}

const firstLoginRepositoryImpl = new FirstLoginRepositoryImpl();
export default firstLoginRepositoryImpl;
