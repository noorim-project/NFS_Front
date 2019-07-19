import React from 'react'

import * as S from './Main_content'

const TimeTableContentLunch = ()=>{
  return(
    <S.Content_tr>
      <S.TimeTableTd width="10px" minwidth="1"></S.TimeTableTd>
      <S.TimeTableTd border="1" padding="1"></S.TimeTableTd>
      <S.TimeTableTd border="1"></S.TimeTableTd>
      <S.TimeTableTd border="1">점심시간</S.TimeTableTd>
      <S.TimeTableTd border="1"></S.TimeTableTd>
      <S.TimeTableTd border="1"></S.TimeTableTd>
    </S.Content_tr>
  )
}

export default TimeTableContentLunch;