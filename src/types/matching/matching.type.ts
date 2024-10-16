
export interface MatchingData{
    id: string,
    userId: number,
    professorId: number,
    matchingType: string,
    userName:string,
    schoolName:string,
    majorName:string,
    userProfileImage:string,
}
export interface MatchingResponse {
    data:MatchingData[]
}