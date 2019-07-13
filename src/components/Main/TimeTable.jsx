import React from 'react';

import { Component } from '../../styles/gloobalStlye';
import TimeTableContent from './TimeTableContent';
import * as S from './Main_content';
import TimeTableContentLunch from './TimeTableContentLunch';

const TimeTable = ()=>{
  return(
    <S.TimeTable>
      <S.Content_tbody>
      <S.Content_tr>
        <S.TimeTableTh></S.TimeTableTh>
        <S.TimeTableTh color="white" fontsize="25px">월</S.TimeTableTh>
        <S.TimeTableTh color="white" fontsize="25px">화</S.TimeTableTh>
        <S.TimeTableTh color="white" fontsize="25px">수</S.TimeTableTh>
        <S.TimeTableTh color="white" fontsize="25px">목</S.TimeTableTh>
        <S.TimeTableTh color="white" fontsize="25px">금</S.TimeTableTh>
      </S.Content_tr>
        <TimeTableContent Mon="창체" Tue="JAVA" Wen="확통" Thu="체육" Fri="영어" num="1"/>
        <TimeTableContent Mon="창체" Tue="JAVA" Wen="확통" Thu="체육" Fri="영어" num="2"/>
        <TimeTableContent Mon="창체" Tue="JAVA" Wen="확통" Thu="체육" Fri="영어" num="3"/>
        <TimeTableContent Mon="창체" Tue="JAVA" Wen="확통" Thu="체육" Fri="영어" num="4"/>
        <TimeTableContentLunch/>
        <TimeTableContent Mon="창체" Tue="JAVA" Wen="확통" Thu="체육" Fri="영어" num="5"/>
        <TimeTableContent Mon="창체" Tue="JAVA" Wen="확통" Thu="체육" Fri="영어" num="6"/>
        <TimeTableContent Mon="창체" Tue="JAVA" Wen="확통" Thu="체육" Fri="영어" num="7"/>

      </S.Content_tbody>
    </S.TimeTable>
  )
}

export default TimeTable