import { useMemo } from "react";
import * as S from "./style";
import Slider from "react-slick";
import { useAllGetCommunityQuery } from "@/queries/community/community.query";
import CommunityPost from "../../communityPost";
import { convertDescriptionDate, convertCreatedDate } from "@/utils/transform/date/convertDate";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const SlickArrowLeft= ({ className, style, onClick }:ArrowProps) => {
  return (
    <S.ArrowLeft
      className={className}
      style={{ ...style }}
      onClick={onClick}
    >
      ←
    </S.ArrowLeft>
  );
};
const SlickArrowRight = ({ className, style, onClick }:ArrowProps) => {
  return (
    <S.ArrowRight
      className={className}
      style={{ ...style }}
      onClick={onClick}
    >
      →
    </S.ArrowRight>
  )
}

const Community = () => {
  const { data: communityList } = useAllGetCommunityQuery(1);

  const communitySetting = useMemo(
    () => ({
      arrows: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
      prevArrow: <SlickArrowLeft />,  
      nextArrow: <SlickArrowRight />,
    }),
    []
  );
  return (
    <S.CommunityBox>
      <S.CommunityHeader>
        <span>오늘의 글을 확인해 보세요.</span>
      </S.CommunityHeader>
      <S.CommunityContents>
      <Slider {...communitySetting}>
        {Array.isArray(communityList?.data)
          ? communityList?.data
              .map((community) => (
                <CommunityPost
                key={community.id}
                  id={community.id}
                  title={community.title}
                  modifiedDateTime={convertDescriptionDate(community.modifiedDateTime)}
                  Description={community.content}
                  profileImage={community.profileImage}
                  userName={community.userName}
                  createdDateTime={convertCreatedDate(community.createdDateTime)}
                  comment={community.comment}
                  customStyle={{ width: "90%", height: "60%", marginLeft:"5px" }}
                />
              ))
          :<span >내용이 없습니다.</span>}
          </Slider>
      </S.CommunityContents>
    </S.CommunityBox>
  );
};
export default Community;
