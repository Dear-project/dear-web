import { Response } from "../util/resposne.type";

export interface ProfessorData {
  professorId: number;
  name: string;
  school: string;
  major: string;
}

export interface ProfessorResponse extends Response {
  data: ProfessorData[];
}
