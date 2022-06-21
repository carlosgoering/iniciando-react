import { useCallback } from 'react';
import ArrowLeft from '../../assets/ArrowLeft.svg'
import ArrowRight from '../../assets/ArrowRight.svg'

import * as S from './styles'

const CardChart = () => {
    const amoutBars = Array.from(Array(12).keys());

    const fillZero = useCallback((value: number) => {
        const number = (value + 1).toString();
        return number.padStart(2,"0");
    }, []);

    return (
        <S.Container>
            <div>
                <img src={ArrowLeft} alt='Arrow Back' />
                <strong>Stats</strong>
                <img src={ArrowRight} alt='Arrow Foward' />
            </div>

            <S.Chart>
                {amoutBars.map((item) => {
                    return (
                        <div key={String(item)}>
                            <div>
                                <span></span>
                            </div>
                            <small>{fillZero(item)}</small>
                        </div>
                    )
                })}
            </S.Chart>
        </S.Container>
    )
}

export default CardChart