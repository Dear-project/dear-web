import {Response} from "@/types/util/response.type"

export interface BannerData {
  id: number;
  title: string,
  url: string;
  imagePath: string;
}
export interface BannerResponse extends Response{
    data:BannerData[];
}