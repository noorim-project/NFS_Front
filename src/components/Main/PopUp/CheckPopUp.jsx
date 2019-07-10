import React from 'react';

import checkIcon from '../../../assets/Landing/Check.svg';
import * as S from '../../../styles/main';

const CheckPopUp = ({ inputData }) => {
  const { title, checkContentMain, checkContentSub } = inputData[0];

  return (
    <S.ContentCover>
      <S.CheckIcon src={checkIcon} alt="체크 아이콘" />
      <S.ContentTitle>{title}</S.ContentTitle>
      <S.ContentText>{checkContentMain}</S.ContentText>
      <S.ContentText>{checkContentSub}</S.ContentText>
    </S.ContentCover>
  );
};

export default CheckPopUp;
