import React from 'react'

import * as S from './Main_content'
import { Cloud , School , Facebook , DMS} from '../../assets/Main'

const MainFooter = ()=>{
    return(
        <S.MainFooterDiv>
            <div>
                <S.MainFooterButton><S.MainFooterButtonImg src={Facebook}/><S.MainFooterButtonSpan>Noorim Facebook</S.MainFooterButtonSpan></S.MainFooterButton>
                <S.MainFooterButton><S.MainFooterButtonImg src=""/><S.MainFooterButtonSpan>Entry</S.MainFooterButtonSpan></S.MainFooterButton>
                <S.MainFooterButton><S.MainFooterButtonImg src={Cloud}/><S.MainFooterButtonSpan>Cloud</S.MainFooterButtonSpan></S.MainFooterButton>
                <S.MainFooterButton><S.MainFooterButtonImg src={School}/><S.MainFooterButtonSpan>School</S.MainFooterButtonSpan></S.MainFooterButton>
                <S.MainFooterButton><S.MainFooterButtonImg src={DMS}/><S.MainFooterButtonSpan>DMS</S.MainFooterButtonSpan></S.MainFooterButton>
            </div>
        </S.MainFooterDiv>
    )
}

export default MainFooter
