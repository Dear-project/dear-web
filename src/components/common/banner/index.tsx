import React, { useEffect } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useBanner from "@/hooks/banner/useBanner";
import Image from "next/image";
import * as S from "./style";
import CommonBanner from "@/asset/commonBanner.svg";

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
    appendDots: (dots) => <S.CustomDots>{dots}</S.CustomDots>,
    customPaging: (i) => <S.Dot />,
  };

  return (
    <S.SliderContainer>
      <Slider {...settings}>
        {Array.isArray(bannerList?.data) &&
          bannerList?.data.map((item) => (
            <S.Slide key={item.id}>
              <S.StyledImageWrapper>
                {item.imagePath !== null && item.imagePath !== undefined ? (
                  <Image src={item.imagePath} alt={`Banner ${item.id}`} width={1000} height={200} />
                ) : (
                  <Image src={CommonBanner} alt="기본 배너" width={1000} height={200} />
                )}
              </S.StyledImageWrapper>
            </S.Slide>
          ))}
      </Slider>
    </S.SliderContainer>
  );
};

export default SimpleSlider;
