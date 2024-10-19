export const QUERY_KEYS = Object.freeze({
  matching: {
    matching: "/matching",
  },
  professor: {
    professor: "/professor",
    review: "/review",
    getProfessor: (id: number) => ["/profile", id],
  },
  community: {
    community: "/community",
    getMyCommunity: "/community/my-articles",
    comment: {
      comment: "comment",
      getComment: (id: number) => ["comment", id],
    },
  },
  profile: {
    getProfile: "/profile",
    postSchoolChange: "",
    postMajorChange: "",
    postProfileImage: "/profile/image",
    patchPassword: "/profile/password",
  },
  school: {
    postSchool: "/school",
    getSchoolList: "/school/list",
  },
  major: {
    major: "/major",
    getMajorList: "/major/list",
  },
  banner: {
    getAllbanner: "/banner",
  },
  chat: {
    getChatMy: "/chat/get",
    getChaySerach: "/chat/search",
  },
});
