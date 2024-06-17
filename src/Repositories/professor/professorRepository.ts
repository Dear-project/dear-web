import { ProfessorResponse } from "src/types/matching/professor.types";
import { Response } from "src/types/util/resposne.type";

export interface ProfessorRepository {
  getProfessor(page: number): Promise<ProfessorResponse>;
}
