import PostDetail from "@/components/home/community/postDetail/index";
import React from "react";

type PageParams = {
  id: string;
};

const Page = ({ params }: { params: PageParams }) => {
  return (
    <div>
      <PostDetail />
    </div>
  );
};

export default Page;
