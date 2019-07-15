import React from 'react'

import * as S from './Main_content'

const TimeTableContent = ({Mon,Tue,Wen,Thu,Fri,num})=>{
  return(
    <S.Content_tr>
      <S.TimeTableTd width="10px" minwidth="1">{num}</S.TimeTableTd>
      <S.TimeTableTd>{Mon}</S.TimeTableTd>
      <S.TimeTableTd>{Tue}</S.TimeTableTd>
      <S.TimeTableTd padding="1">{Wen}</S.TimeTableTd>
      <S.TimeTableTd>{Thu}</S.TimeTableTd>
      <S.TimeTableTd>{Fri}</S.TimeTableTd>
    </S.Content_tr>
  )
}

export default TimeTableContent;