import styled from "styled-components";
export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-self: center;

  gap: 10px 40px;
`;

export const Card = styled.div`
  width: 391px;
  height: 180px;
  border-radius: 5px;
  border: 1px solid var(--Gray500, #aaa);
  background: var(--Gray100, #f4f5f9);
  gap: 180px;
  display: flex;
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
  display: flex;
  justify-items: center;
  flex-direction: column;
  align-content: center;
  align-items: flex-start;
  flex-wrap: nowrap;
`;
