import React from 'react'

import * as S from './Main_content'

const TimeTableContent = ({Mon,Tue,Wen,Thu,Fri,wid,num})=>{
  return(
    <S.Content_tr>
      <S.TimeTableTd wid={wid} padding="1" >{num}</S.TimeTableTd>
      <S.TimeTableTd wid={wid}>{Mon}</S.TimeTableTd>
      <S.TimeTableTd wid={wid}>{Tue}</S.TimeTableTd>
      <S.TimeTableTd wid="1" padding="1">{Wen}</S.TimeTableTd>
      <S.TimeTableTd wid={wid}>{Thu}</S.TimeTableTd>
      <S.TimeTableTd wid={wid}>{Fri}</S.TimeTableTd>
    </S.Content_tr>
  )
}

export default TimeTableContent;