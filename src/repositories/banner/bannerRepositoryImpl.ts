import { BannerResponse } from "../../types/banner/banner.types";
import { BannerRepository } from "./bannerRepository";
import { dearV1Axios } from "@/libs/axios/customAxios";

class BannerRepositoryImpl implements BannerRepository {
  public async getAllbanner(): Promise<BannerResponse> {
    const { data } = await dearV1Axios.get("/banner/active");
    return data;
  }
}

export default new BannerRepositoryImpl();
