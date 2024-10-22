export const ErrorTransform = (errorStatus: number): string => {
  switch (errorStatus) {
    case 401:
      return "토큰이 만료되었습니다.";
    case 403:
      return "권한이 없습니다.";
    case 404:
      return "해당하는것을 찾을 수 없습니다.";
    case 409:
      return "중복된 값입니다.";
    case 500:
      return "서버에서 에러가 발생하였습니다.";
    default:
      return "알 수 없는 에러가 발생하였습니다.";
  }
};
