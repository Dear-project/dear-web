import styled from "styled-components";

export const Community = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  background: #f4f3f9;

  & > img:nth-child(n + 2) {
    position: fixed;
    top: 85%;
    left: 92%;

    cursor: pointer;
  }
`;

export const Main = styled.div`
  width: 1655px;
  height: 1080px;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export const SearchWrap = styled.div`
  width: 600px;
  height: 50px;

  margin-bottom: 20px;

  background: white;
  border: none;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 10px;

  img {
    width: 25px;
    height: 25px;
    margin-right: 20px;
  }
`;

export const Search = styled.input`
  width: 95%;
  height: 100%;

  font-size: 20px;

  padding-left: 15px;
  border: none;
  border-radius: 20px;

  &::placeholder {
    font-weight: 600;
    font-size: 20px;
    color: #d1d1d1;
  }

  &:focus {
    outline: none;
  }
`;

export const PostWrap = styled.div`
  display: flex;
  flex-direction: column;

  width: 1300px;
  height: 100%;

  gap: 20px;
`;
