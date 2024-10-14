export const QUERY_KEYS = Object.freeze({
  matching: {
    matching: "/matching",
  },
  professor: {
    professor: "/professor",
    review: "/review",
    getProfessor: "/profile",
  },
  community: {
    community: "/community",
    getMyCommunity: "/community/my-articles",
    comment: {
      comment: "comment",
    },
  },
  profile: {
    getProfile: "/profile",
    postSchoolChange: "",
    postMajorChange: "",
    postProfileImage: "",
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
  chat:{
    getChatMy:"chat/get",
  }
});
