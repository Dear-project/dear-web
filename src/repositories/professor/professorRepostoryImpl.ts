import { ProfessorResponse } from "src/types/matching/professor.types";
import { ProfessorRepository } from "./professorRepository";
import { dearV1Axios } from "@/libs/axios/customAxios";
import { Response } from "@/types/util/response.type";

class ProfessorRepositoryImpl implements ProfessorRepository {
  public async getProfessor(page: number): Promise<ProfessorResponse> {
    const { data } = await dearV1Axios.get(`/professor?page=${page}&size=10`);
    return data;
  }
}

const professorRepositoryImpl = new ProfessorRepositoryImpl();
export default professorRepositoryImpl;
