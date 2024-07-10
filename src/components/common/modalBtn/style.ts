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
`;
export const Boxlayout = styled.div`
  margin-left: 10%;
  margin-bottom: 3%;
  padding-left: 10%;
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
