import { Response } from "@/types/util/response.type";

export interface GetSchoolListRespose extends Response {
  schoolType: string;
  link: string;
  schoolGubun: string;
  adres: string;
  schoolName: string;
  region: string;
  totalCount: string;
  estType: string;
  seq: string;
}
