import React from "react";
import * as S from "./style";
import { useAllGetCommunityQuery } from "@/queries/community/community.query";
import CommunityPost from "../../communityPost";
import { convertDescriptionDate, convertCreatedDate } from "@/utils/transform/date/convertDate";

const ProfessorCommunity = ()=>{
    const { data: communityList } = useAllGetCommunityQuery(1);

return(
    <S.MainBox>
        <S.CommunityMainHeader>
            <span>교수커뮤니티</span>
        </S.CommunityMainHeader>
        <S.CommunityMainContents>
            {communityList?.data ? communityList?.data.slice(0,3).map((community)=>(
                <CommunityPost
                id={community.id}
                title={community.title}
                modifiedDateTime={convertDescriptionDate(community.modifiedDateTime)}
                Description={community.content}
                profileImage={community.profileImage}
                userName={community.userName}
                createdDateTime={convertCreatedDate(community.createdDateTime)}
                comment={community.comment}
                customStyle={{width:"30%", height:'90%'}}
                />
            ))  : <span>내용이 없습니다</span>}
        </S.CommunityMainContents>
    </S.MainBox>
)
}
export default ProfessorCommunity;