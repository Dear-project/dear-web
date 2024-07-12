export interface matcingRepository {
  postMatching(subjectId: number): Promise<void>;
}
