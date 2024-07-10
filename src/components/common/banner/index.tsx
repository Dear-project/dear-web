import React, { useEffect, useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useBanner from "@/hooks/banner/useBanner";
import * as S from "./style";

const SimpleSlider: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const { getAllbanner } = useBanner();
  const bannerList = getAllbanner();

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <S.SliderContainer>
      <Slider {...settings}>
        {bannerList?.data.map((item, idx) => (
          <S.Slide key={item.id}>
            <img src={item.imagePath} alt={`Banner ${item.id}`} />
          </S.Slide>
        ))}
      </Slider>
    </S.SliderContainer>
  );
};

export default SimpleSlider;
