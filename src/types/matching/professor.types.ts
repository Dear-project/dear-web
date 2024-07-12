import { Response } from "@/types/util/response.type";

export interface ProfessorData {
  professorId: number;
  name: string;
  school: string;
  major: string;
  profileImage: string;
}

export interface ProfessorDetailData {
  data: {
    professorId: number;
    email: string;
    name: string;
    role: string;
    schoolName: string;
    introduce: string;
    stsMessage: string;
    imgPath: string;
    lclass: string;
    mclass: string;
  };
}

export interface ReviewData {
  comment: string;
}

export interface ProfessorResponse extends Response {
  data: ProfessorData[];
}

export interface ReviewResposne extends Response {
  data: ReviewData[];
}
