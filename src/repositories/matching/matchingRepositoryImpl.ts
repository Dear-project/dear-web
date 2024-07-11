import { matcingRepository } from "./matchingRepository";
import dearV1Axios  from "@/libs/axios/customAxios";

class MatchingRepositoryImpl implements matcingRepository {
  public async postMatching(subjectId: number): Promise<void> {
    await dearV1Axios.post("/matching", subjectId);
  }
}

export default new MatchingRepositoryImpl();
