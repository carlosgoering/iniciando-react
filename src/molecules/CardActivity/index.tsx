import ArrowUp from '../../assets/ArrowUp.svg'

import * as S from './styles'


const CardActivity = () => (
    <S.Container>
        <small>Activity</small>
        <div>
            <strong>18 </strong>
            <img src={ArrowUp} />
        </div>
        <i className="circle2"></i>
        <i className="circle1"></i>
        <i className="circle3"></i>
    </S.Container>
)

export default CardActivity;