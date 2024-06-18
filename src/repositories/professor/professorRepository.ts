import { ProfessorResponse } from "src/types/matching/professor.types";
import { Response } from "@/types/util/response.type";

export interface ProfessorRepository {
  getProfessor(page: number): Promise<ProfessorResponse>;
}
