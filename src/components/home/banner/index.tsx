import { useMemo } from "react";
import * as S from "./style";
import Slider from "react-slick";
import BannerItem from "./BannerItem/index";
import useBanner from "@/hooks/banner/useBanner";

const Banner = () => {
  const { getAllBanner } = useBanner();
  const bannerList = getAllBanner();

  const bannerSetting = useMemo(
    () => ({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
      appendDots: (dots: any) => (
        <div
          style={{
            position: "relative",
            top: "-2rem",
          }}
        >
          {dots}
        </div>
      ),
    }),
    []
  );

  return (
    <S.BannerContainer>
      <Slider {...bannerSetting}>
        {bannerList?.data.slice(1, 2).map((banner) => (
          <BannerItem
            title={banner.title}
            imgSrc={banner.imagePath}
            redirectURL={banner.url}
            key={banner.id}
          />
        ))}
      </Slider>
    </S.BannerContainer>
  );
};

export default Banner;