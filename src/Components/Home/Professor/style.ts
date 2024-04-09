import styled from "styled-components";
export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-self: center;
  align-items: center;
`;

export const Card = styled.div`
  margin: 20px 40px;
  width: 391px;
  height: 180px;
  border-radius: 5px;
  border: 1px solid var(--Gray500, #aaa);
  background: var(--Gray100, #f4f5f9);
  display: flex;
  align-items: center;
  /* justify-content: space-evenly; */
`;
export const Name = styled.div`
  color: var(--Black, #000);
  font-family: Assistant;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const Classed = styled.div`
  color: var(--Gray600, #787878);
  font-family: Assistant;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 5px;
`;
export const Sub = styled.div`
  color: var(--Gray600, #787878);
  font-family: Assistant;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const Text = styled.div`
  align-items: flex-start;
  align-self: center;
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  margin-bottom: 40px;
`;
export const Img = styled.img`
  object-fit: cover;
  width: 110px;
  height: 110px;
  border-radius: 5%;
  margin-left: 40px;
`;
