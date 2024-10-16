import * as S from "./style";
import Image from "next/image";
import NullImg from "@/asset/img/null_Img/null_img.svg";
import { MatchingData } from "@/types/matching/matching.type";
import {  usematchingReject, useMatchingAccept } from "@/queries/matching/matching.query";
import dearToast from "@/libs/Swal/Swal";

interface MatchingProps {
    data: MatchingData;
}

const MatchingList = ({ data }: MatchingProps)=>{

    const matchingAccept = useMatchingAccept();
    const matchingReject = usematchingReject();

    const accepteButton = ()=>{
        matchingAccept.mutate(data.userId,{
            onSuccess: ()=>{
                dearToast.sucessToast('수락성공');
            }
        })
    }
    const rejectButton = ()=>{
        matchingReject.mutate(data.userId,{
            onSuccess:()=>{
                dearToast.sucessToast('거절성공')
            }
        })
    }
return(
    <S.Matching>
        <S.TitleBox>
    <Image src={data.userProfileImage=== null ? NullImg: data.userProfileImage} alt="이미지 오류" />
    <S.TitleDetail>
        <p>{data.userName}</p>
        <span>{data.schoolName}</span>
        <span>{data.majorName}</span>  
    </S.TitleDetail>
    </S.TitleBox>
    <S.ApproveBox>
            <div className="blueButton" onClick={()=>accepteButton()}>수락하기</div>
            <div className="redButton" onClick={()=>rejectButton()}>거절하기</div>
        </S.ApproveBox>
    </S.Matching>
)
}
export default MatchingList;