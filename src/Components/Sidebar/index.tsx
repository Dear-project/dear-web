import React from "react";
import * as S from "./style";

export const index = () => {
  return (
    <div>
      <S.Side>
        <S.Logo>DEAR.</S.Logo>
        <S.Option>
          <S.Select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 41 40"
              color="var(--New, #0e2764);"
            >
              <path
                d="M3.35714 37.4664H13.9057V22.5564H27.0943V37.4664H37.6429V14.6643L20.5 3.16696L3.35714 14.6643V37.4664ZM0.5 40V13.3975L20.5 0L40.5 13.3975V40H24.2371V25.0899H16.7629V40H0.5Z"
                fill="white"
              />
            </svg>
            메인
          </S.Select>
          <S.Select>
            <img src="#" alt="#" />
            채팅
          </S.Select>
          <S.Select>
            <img src="#" alt="#" />
            교수찾기
          </S.Select>
          <S.Select>
            <img src="#" alt="#" />
            커뮤니티 광장
          </S.Select>
        </S.Option>
        <S.My>
          <S.Profile src="images.jpeg" alt="#" />
          <div>
            <S.Name>홍길동</S.Name>
            <S.School>대구소프트웨어 마이스터 고등학교</S.School>
          </div>
        </S.My>
      </S.Side>
    </div>
  );
};
export default index;
