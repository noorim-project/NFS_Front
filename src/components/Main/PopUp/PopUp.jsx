import React from 'react';

import * as S from '../../../styles/main';
import AdditionalContent from './AdditionalContent';
import cancleButton from '../../../assets/Landing/cancleButton.svg';

const PopUp = ({
  title,
  inputData,
  buttonText,
  additionalContent,
  isPagination,
  paginationList,
  buttonOnClickEvent,
  setIsFindPassword,
  handlePopUp,
  setPopUpOpen,
  setPopUpClose,
}) => (
  <S.PopUpComponent>
    <S.PopUpPosition>
      <S.PopUpCloseButton
        onClick={() => setPopUpClose(handlePopUp)}
        src={cancleButton}
        alt="닫기버튼"
      />
      <S.PopUpWrapper>
        <S.PopUpText size="50px" color="#3e3e3e" fontBold>
          {title}
        </S.PopUpText>
        {inputData.map((i, index) => (
          <S.PopUpInputCover key={index} marginTop={i.marginTop}>
            <S.PopUpInput
              marginRight={i.marginRight}
              widthSize={i.size}
              placeholder={i.placeholder}
              type={i.type}
            />
            {i.citationButton && (
              <S.PopUpButton small>
                <S.PopUpText size="10px" cursorPointer>
                  {i.citationText}
                </S.PopUpText>
              </S.PopUpButton>
            )}
          </S.PopUpInputCover>
        ))}
        <S.PopUpButtonCover>
          {isPagination && (
            <S.Pagination>
              {paginationList.map((isActive, index) => (
                <S.PaginationButton key={index} active={isActive} />
              ))}
            </S.Pagination>
          )}
          <S.PopUpButton onClick={() => buttonOnClickEvent()}>
            <S.PopUpText size="26px" color="#ffffff">
              {buttonText}
            </S.PopUpText>
          </S.PopUpButton>
        </S.PopUpButtonCover>
        {additionalContent && (
          <AdditionalContent setPopUpOpen={setPopUpOpen} setIsFindPassword={setIsFindPassword} />
        )}
      </S.PopUpWrapper>
    </S.PopUpPosition>
  </S.PopUpComponent>
);

export default PopUp;
