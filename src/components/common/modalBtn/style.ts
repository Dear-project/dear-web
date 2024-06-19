import styled from "styled-components";

export const layout = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  /* z-index: 3; */
  display: flex;
  -webkit-box-pack: center;
  -webkit-box-align: center;
`;

export const Boxlayout = styled.div`
  position: fixed;
  top: 85%;
  left: 10%;
  width: 150px;
  height: 70px;
  border-radius: var(--Small, 4px);
  background: #fff;
  box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-around;
`;
export const profile = styled.button`
  border: none;
  background-color: #fff;
  font-size: 16px;
  color: #000;
`;
export const logout = styled.button`
  border: none;
  background-color: #fff;
  font-size: 16px;
  color: #f90707;
`;
