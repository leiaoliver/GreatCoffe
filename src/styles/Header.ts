import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  max-width: 100%;
  width: 80%;

  height: 80px;

  color: #fff;

  button {
    background: none;
    width: 172px;
    height: 37px;
    border-radius: 10px;
    border-color: rgba(130, 87, 229, 1);
    cursor: pointer;

    color: #fff;

    :hover {
      border-color: black;
    }
  }
`;

export const Image = styled.img`
  width: 30px;
  pointer-events: none;
`;

export const Ul = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;

  text-decoration: none;
  list-style: none;

  cursor: pointer;
`;
