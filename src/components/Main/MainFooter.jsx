import React from 'react'

import * as S from './Main_content'
import { Cloud , School , Facebook } from '../../assets/Main'

const MainFooter = ()=>{
    return(
        <S.MainFooterDiv>
            <div>
                <S.MainFooterButton><S.MainFooterButtonImg src={Facebook}/></S.MainFooterButton>
                <S.MainFooterButton><S.MainFooterButtonImg src={School}/></S.MainFooterButton>
                <S.MainFooterButton><S.MainFooterButtonImg src={Cloud}/></S.MainFooterButton>
                <S.MainFooterButton><S.MainFooterButtonImg src=""/></S.MainFooterButton>
                <S.MainFooterButton><S.MainFooterButtonImg src=""/></S.MainFooterButton>
            </div>
        </S.MainFooterDiv>
    )
}

export default MainFooter
