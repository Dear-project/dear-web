
export interface MatchingData{
    id: number,
    userId: number,
    professorId: number,
    matchingType: string,
}
export interface MatchingResponse {
    data:MatchingData[]
}