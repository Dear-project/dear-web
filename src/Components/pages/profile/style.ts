import styled from "styled-components";
export const ABox = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh; // 화면 전체 높이 차지
  flex-direction: column;
  align-items: center; // 수직 중앙 정렬
  justify-content: center; // 수평 중앙 정렬
`;

export const BBox = styled.div`
  width: 65vw;
  height: 80vh;
  background-color: #fff;
  border-radius: 1.0625rem;
`;
