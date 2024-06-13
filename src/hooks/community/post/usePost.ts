import { useAllGetCommunityQuery } from "@/queries/community/community.query";

class UsePost {
  public getAllCommunity = (page: number) => {
    const [{ data: communityList }] = useAllGetCommunityQuery(page);
    return communityList;
  };
}

const usePost = new UsePost();
export default usePost;
