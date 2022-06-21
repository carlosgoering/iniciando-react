import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: -90px;
  left: 30px;
  width: 210px;
  height: 210px;
  border-radius: 18px;
  background-color: #fff;
  box-shadow: 0px 17.5px 28px rgba(0, 0, 0, 0.1);
  padding: 20px 20px;
  animation: showOnPageChart 0.43s linear forwards;
  opacity: 0;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  strong {
    font-weight: 500;
  }

  @keyframes showOnPageChart {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
      bottom: -70px;
    }
  }
`;

function generateBars() {
  const amoutBars = [...Array(12).keys()];
  let stylesSpan: any = [];

  amoutBars.forEach((item) => {
    stylesSpan.push(`
        div:nth-child(${item+1}){
            display: flex;
            justify-content:center;
            align-items: center;
            flex-direction: column;
            
            div{
                background-color: #eff3fe;
                height: 91px;
                width: 2.1px;
                border-radius: 5px;
                display: flex;
                justify-content: flex-end;

                span {
                    background-color: #5236ff;
                    display: block;
                    height:0px;
                    animation: animationBar 0.65s linear forwards;
                    max-height: ${Math.ceil(Math.random() * 100)}px;
                    width: 3.5px;
                    border-radius: 5px;
                }
            }
            small {
                color: #BACCFD;
                font-size: 9px;
                margin-top: 7px;
            }    
            
        }
        `);
  });

  return stylesSpan.join("");
}

export const Chart = styled.div`
  margin-top: 28px;

  ${generateBars()}

  @keyframes animationBar {
    from {
      height: 0px;
    }

    to {
      height: 91px;
    }
  }
`;
