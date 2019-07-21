import React from 'react'

import TimeTable from './TimeTable';
import * as S from './Main_content';
import { Component } from '../../styles/gloobalStlye';
import MainFooter from './MainFooter';

const MainThirdPage = ()=>{
    return(
        <Component>
        <S.ThirdPageDiv>
            <S.ThirdPageTitle>시간표</S.ThirdPageTitle>
            <TimeTable/>
        </S.ThirdPageDiv>
        <MainFooter/>
        </Component>
    )
}

export default MainThirdPage;