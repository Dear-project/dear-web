import { ProfessorDetailData, ProfessorResponse, ReviewResposne } from "src/types/matching/professor.types";
import { ProfessorRepository, reviewRequestParams } from "./professorRepository";
import { dearV1Axios } from "@/libs/axios/customAxios";

class ProfessorRepositoryImpl implements ProfessorRepository {
  public async getProfessor(page: number): Promise<ProfessorResponse> {
    const { data } = await dearV1Axios.get(`/professor?page=${page}&size=10`);
    return data;
  }
  public async getProfessorDetail(id: number): Promise<ProfessorDetailData> {
    const { data } = await dearV1Axios.get(`/profile/${id}`);
    return data;
  }
  public async getReview(reviewParams: reviewRequestParams): Promise<ReviewResposne> {
    const { page, targetId } = reviewParams;
    const { data } = await dearV1Axios.get(`/review?page=${page}&size=1000&targetId=${targetId}`);
    return data;
  }
}

const professorRepositoryImpl = new ProfessorRepositoryImpl();
export default professorRepositoryImpl;
