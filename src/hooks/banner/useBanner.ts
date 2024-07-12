import { useGetAllBanner } from "../../queries/banner/banner.query";

const useBanner = () => {
  const getAllbanner = () => {
    const [{ data: bannerList }] = useGetAllBanner();
    if (bannerList !== undefined && bannerList.data !== null && bannerList.data.length > 0) {
      return bannerList;
    }
  };

  return {
    getAllbanner,
  };
};

export default useBanner;
