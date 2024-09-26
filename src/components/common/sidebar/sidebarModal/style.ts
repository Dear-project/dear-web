import styled from "styled-components";

export const layout = styled.div`
  position: fixed;
  z-index: 3;
  display: flex;
  -webkit-box-pack: center;
  justify-content: space-between;
  align-items: flex-end;
  -webkit-box-align: center;
  margin-left: 5rem;
  margin-bottom: 1rem;
  bottom: 2rem;
  left: 5rem;
`;
export const Boxlayout = styled.div`
  width: 10rem;
  height: 5rem;
  border-radius: var(--Small, 4px);
  background: #fff;
  box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-around;

`;
export const profile = styled.button`
  width: 100%;
  height: 50%;
  border: none;
  background-color: #fff;
  font-size: 16px;
  color: #000;
  cursor: pointer;
  border-bottom: 1px solid lightgray;
`;
export const logout = styled.button`
  width: 100%;
  height: 50%;
  border: none;
  background-color: #fff;
  font-size: 16px;
  color: #f90707;
  cursor: pointer;
`;
