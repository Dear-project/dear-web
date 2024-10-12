import dayjs from "dayjs";
import "dayjs/locale/ko";

export const convertDescriptionDate = (date: string) => {
  dayjs.locale("ko");
  return dayjs(date).format("YYYY년 M월 D일 A h시 mm분");
};

export const convertCreatedDate = (date: string) => {
  dayjs.locale("ko");
  return dayjs(date).format("YYYY.MM.DD.")
}

export const convertPostDetailDate = (date: string) => {
  dayjs.locale("ko");
  return dayjs(date).format("YYYY년 MM월 DD일(ddd) HH:MM");
}