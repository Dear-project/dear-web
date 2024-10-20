import { useMemo } from "react";
import * as S from "./style";
import Slider from "react-slick";
import { useAllGetCommunityQuery } from "@/queries/community/community.query";
import CommunityPost from "../../communityPost";
import { convertDescriptionDate, convertCreatedDate } from "@/utils/transform/date/convertDate";

const Community = () => {
  const { data: communityList } = useAllGetCommunityQuery(1);

  const communitySetting = useMemo(
    () => ({
      arrows: false,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
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
                  id={community.id}
                  title={community.title}
                  modifiedDateTime={convertDescriptionDate(community.modifiedDateTime)}
                  Description={community.content}
                  profileImage={community.profileImage}
                  userName={community.userName}
                  createdDateTime={convertCreatedDate(community.createdDateTime)}
                  comment={community.comment}
                  customStyle={{ width: "90%", height: "40%" }}
                />
              ))
          :<span >내용이 없습니다.</span>}
          </Slider>
      </S.CommunityContents>
    </S.CommunityBox>
  );
};
export default Community;
