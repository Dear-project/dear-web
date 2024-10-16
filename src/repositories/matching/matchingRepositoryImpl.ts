import { MatcingRepository, pageRequest } from "./matchingRepository";
import dearAxios  from "@/libs/axios/customAxios";
import { MatchingResponse } from "@/types/matching/matching.type";

interface matchingProps { 
  subjectId:string,
}

class MatchingRepositoryImpl implements MatcingRepository {
  public async postMatching(subjectId: number): Promise<void> {
    await dearAxios.post('/matching', subjectId);
  }
  
  public async getMatchingList(pageRequest:pageRequest):Promise<MatchingResponse> {
    const {data} = await dearAxios.get('/matching', {params:pageRequest})
    return data
  }
  public async matchingAccept(subjectId: number):Promise<void>{
    
    
    await dearAxios.post('/matching/accept', { subjectId: subjectId });
  }
  public async matchingReject(subjectId: number):Promise<void>{
    
    await dearAxios.post('/matching/reject', subjectId);
    }
}

export default new MatchingRepositoryImpl();
