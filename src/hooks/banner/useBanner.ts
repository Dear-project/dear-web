import { useGetAllBanner } from "../../queries/banner/banner.query";

const useBanner = () => {
  const [{ data: bannerList }] = useGetAllBanner(); 

  const getAllBanner = () => {
    if (bannerList !== undefined && bannerList.data !== null && bannerList.data.length > 0) {
      return bannerList;
    }
    return null; 
  };

  return {
    getAllBanner, 
  };
};

export default useBanner;
