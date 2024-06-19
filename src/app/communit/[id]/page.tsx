import PostDetail from "@/components/community/postDetail";
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
