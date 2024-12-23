import React, { useEffect, useState, useMemo } from "react";
import * as S from "./style";
import Slider from "react-slick";
import CommunityPost from "../../communityPost";
import { convertDescriptionDate, convertCreatedDate } from "@/utils/transform/date/convertDate";
import { useAllGetProfessorCommunityQuery } from "@/queries/community/professor/professorCommunity.query";
import { useQueryClient } from "react-query";

const ProfessorCommunity = () => {
  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.invalidateQueries("/community/professor");
  }, []);
  const { data: communityList } = useAllGetProfessorCommunityQuery(1);
  const [visiblePosts, setVisiblePosts] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 738) {
        setVisiblePosts(3);
      } else if (window.innerWidth <= 1264) {
        setVisiblePosts(3);
      } else {
        setVisiblePosts(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    [],
  );
  return (
    <S.MainBox>
      <S.CommunityMainHeader>
        <span>교수커뮤니티</span>
      </S.CommunityMainHeader>
      <S.CommunityMainContents>
        {Array.isArray(communityList?.data) ? (
          communityList?.data
            .slice(0, 3)
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
                customStyle={{ width: "30%", height: "80%" }}
              />
            ))
        ) : (
          <p>내용이 없습니다.</p>
        )}
      </S.CommunityMainContents>
    </S.MainBox>
  );
};

export default ProfessorCommunity;
