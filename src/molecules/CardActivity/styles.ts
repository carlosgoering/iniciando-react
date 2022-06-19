import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 105px;
  left: 75px;
  background-color: #daaaff;
  color: #fff;
  width: 154px;
  height: 77px;
  border-radius: 12px;
  text-align: left;
  padding: 18px;

  small {
    font-size: 15px;
  }

  div {
    display: flex;
    align-items: center;
    strong {
      display: block;
      font-size: 25px;
      font-weight: 400;
    }
    img {
        padding-left: 5px;
      height: 18px;
    }
  }
`;
