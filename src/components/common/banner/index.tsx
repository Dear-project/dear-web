import React, { useEffect } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useBanner from "@/hooks/banner/useBanner";
import Image from "next/image";
import * as S from "./style";

const SimpleSlider = () => {
  const { getAllbanner } = useBanner();
  const bannerList = getAllbanner();

  useEffect(() => {
    console.log(bannerList); // 데이터 확인
  }, [bannerList]);

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 20000,
  };

  return (
    <S.SliderContainer>
      <Slider {...settings}>
        {bannerList?.data.map((item) => (
          <S.Slide key={item.id}>
            <S.StyledImageWrapper>
              <Image
                src={item.imagePath}
                alt={`Banner ${item.id}`}
                layout="fill"
                objectFit="fill"
              />
            </S.StyledImageWrapper>
          </S.Slide>
        ))}
      </Slider>
    </S.SliderContainer>
  );
};

export default SimpleSlider;
