import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 70px;
  left: 75px;
  background: #DAAAFF;
  color: #fff;
  width: 154px;
  height: 77px;
  border-radius: 12px;
  text-align: left;
  padding: 18px;
  overflow: hidden;
  box-shadow: 0px 17.5px 28px rgba(0,0,0, 0.1);
  animation: showOnPageCard 0.43s linear forwards;
  
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

  i{
      width: 154px;
      height: 77px;
      position: absolute;
      border-radius: 50px;

      &.circle1{
        left: 105px;
        top:-25px;
        background: rgba(255, 255, 255, 0.3);
      }

      &.circle2{
        left: 90px;
        bottom:-50px;
        background : rgba(255, 255, 255, 0.2);
        transform: rotate(45deg);
      }

      &.circle3{
        border:1px solid rgba(255, 255, 255, 0.4);
        transform: rotate(-72deg);
        top:-60px;
        left: 50px;
      }
    }

    @keyframes showOnPageCard {
    from{
        opacity: 0;
    }

    to{
        opacity: 1;
        top: 105px;
    }
  }
`;
