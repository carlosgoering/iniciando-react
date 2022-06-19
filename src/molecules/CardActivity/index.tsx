import ArrowUp from '../../assets/ArrowUp.svg'

import * as S from './styles'


const CardActivity = () => (
    <S.Container>
        <small>Activity</small>
        <div>
            <strong>18 </strong>
            <img src={ArrowUp} />
        </div>
    </S.Container>
)

export default CardActivity;