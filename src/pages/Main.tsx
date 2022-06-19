import ButtonContact from "../atoms/ButtonContact";
import Frontend from "../templates/Frontend";

import HeroHeaderImage from '../assets/hero-header-image.png';

import * as S from './styles'

function Main() {
  return (
  <Frontend>
    <S.Container>
      <div>
        <h1>Design driven development of your web product</h1>
        <h6>We are a full service digital agency that builds immesive user experience.</h6>

        <ButtonContact/>
      </div>
      <S.ColumnImage>
        <img src={HeroHeaderImage} alt="Uma pessoa fazendo pesquisa."/>
      </S.ColumnImage>
    </S.Container>
  </Frontend>
  );

}

export default Main