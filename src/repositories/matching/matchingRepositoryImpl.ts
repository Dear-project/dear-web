import { MatcingRepository, pageRequest } from "./matchingRepository";
import dearAxios  from "@/libs/axios/customAxios";
import { MatchingResponse } from "@/types/matching/matching.type";


class MatchingRepositoryImpl implements MatcingRepository {
  public async postMatching(subjectId: number): Promise<void> {
    await dearAxios.post("/matching", subjectId);
  }
  public async getMatchingList(pageRequest:pageRequest):Promise<MatchingResponse> {
    const {data} = await dearAxios.get('/matching', {params:pageRequest})
    return data
}
}

export default new MatchingRepositoryImpl();
