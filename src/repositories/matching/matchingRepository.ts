import { MatchingResponse } from "@/types/matching/matching.type";

export interface MatcingRepository {
  postMatching(subjectId: number): Promise<void>;
  getMatchingList(pageRequest:pageRequest ) :Promise<MatchingResponse>;
  matchingAccept(subjectId:string):Promise<void>;
  matchingReject(subjectId:string):Promise<void>;
}

export interface pageRequest {
  page:number;
  size:number;
}