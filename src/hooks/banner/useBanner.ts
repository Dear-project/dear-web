import { useGetAllBanner } from "../../queries/banner/banner.query";

const useBanner = () => {
  const getAllbanner = () => {
    const [{ data: bannerList }] = useGetAllBanner();
    if (
      bannerList?.data !== undefined &&
      bannerList !== null &&
      bannerList.data.length > 0
    ) {
      return bannerList;
    }
  };

  return {
    getAllbanner,
  };
};

export default useBanner;
