import React, { useCallback } from 'react';
import * as S from '../../../styles/main';

const PopUpButton = ({
  isPagination,
  paginationList,
  buttonOnClickEvent,
  buttonText,
  isCheckContent,
  setIsLogin,
  handlePopUp,
  resetPagenation,
}) => (
  <S.PopUpButtonCover>
    {isPagination && (
      <S.Pagination>
        {paginationList.map((isActive, index) => (
          <S.PaginationButton key={index} active={isActive} />
        ))}
      </S.Pagination>
    )}
    <S.PopUpButton
      onClick={
        isCheckContent
          ? () => buttonOnClickEvent(handlePopUp, setIsLogin, resetPagenation)
          : buttonOnClickEvent
      }
    >
      <S.PopUpText size="26px" color="#ffffff">
        {buttonText}
      </S.PopUpText>
    </S.PopUpButton>
  </S.PopUpButtonCover>
);

export default PopUpButton;
