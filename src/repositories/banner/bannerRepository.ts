import { BannerResponse } from "../../types/banner/banner.types";

export interface BannerRepository {
  getAllbanner(): Promise<BannerResponse>;
}
