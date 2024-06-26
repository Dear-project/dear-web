import dayjs from "dayjs";
import "dayjs/locale/ko";

export const convertDate = (date: string) => {
  dayjs.locale("ko");
  return dayjs(date).format("YYYY년 MM월 DD일(ddd) HH:MM");
};
