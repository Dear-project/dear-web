import * as S from "./style";
import Image from "next/image";
import Avartar from "@/asset/img/Avatar.svg";
import ChatIcon from "@/asset/chatIcon.svg";
import { useRouter } from "next/navigation";

interface CommunityPost {
  id: number;
  title: string;
  modifiedDateTime: string;
  Description: string;
  profileImage: string;
  userName: string;
  createdDateTime: string;
  comment: number;
  customStyle: React.CSSProperties;
}

const CommunityPost = ({
  id,
  title,
  modifiedDateTime,
  Description,
  profileImage,
  userName,
  createdDateTime,
  comment,
  customStyle,
}: CommunityPost) => {
  const router = useRouter();
  return (
    <S.CommunityPost key={id} style={customStyle} onClick={() => router.push(`/community/professor/${id}`)}>
      <S.Title>{title}</S.Title>
      <S.TimeStamp>{modifiedDateTime}</S.TimeStamp>
      <S.Description>{Description.substring(0, 13)}</S.Description>
      <S.PostInfo>
        <Image src={profileImage ? profileImage : Avartar} alt="프로필사진 에러" width={30} height={30} />
        <span>{userName}</span>
        <span>{createdDateTime}</span>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image src={ChatIcon} alt="댓글" />
          <span style={{ fontSize: "12px" }}>{comment === 0 ? "0" : comment}</span>
        </div>
      </S.PostInfo>
    </S.CommunityPost>
  );
};
export default CommunityPost;
