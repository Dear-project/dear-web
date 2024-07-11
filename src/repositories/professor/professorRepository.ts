import { ProfessorResponse, ProfessorDetailData, ReviewResposne } from "src/types/matching/professor.types";

export interface ProfessorRepository {
  getProfessor(page: number): Promise<ProfessorResponse>;
  getProfessorDetail(id: number): Promise<ProfessorDetailData>;
  getReview(reviewParams: reviewRequestParams): Promise<ReviewResposne>;
}

export interface reviewRequestParams {
  page: number;
  targetId: number;
}
