import * as S from "./style";
import Image from "next/image";
import NullImg from "@/asset/img/null_Img/null_img.svg";
import { MatchingData } from "@/types/matching/matching.type";
interface MatchingProps {
    data: MatchingData;
}

const MatchingList = ({ data }: MatchingProps)=>{
return(
    <S.Matching>
        <S.TitleBox>
    <Image src={NullImg} alt="" />
    <S.TitleDetail>
        <p>{data.id}</p>
        <span>대구소프트웨어마이스터고등학교</span>
        <span>임베디드소프트웨어학과</span>  
    </S.TitleDetail>
    </S.TitleBox>
    <S.ApproveBox>
            <div className="blueButton">수락하기</div>
            <div className="redButton">거절하기</div>
        </S.ApproveBox>
    </S.Matching>
)
}
export default MatchingList;