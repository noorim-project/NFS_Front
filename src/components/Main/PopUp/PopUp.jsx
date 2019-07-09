import React from 'react';

import * as S from '../../../styles/main';
import AdditionalContent from './AdditionalContent';
import cancleButton from '../../../assets/Landing/cancleButton.svg';
import PopUpInput from './PopUpInput';
import PopUpButton from './PopUpButton';

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
        <PopUpInput inputData={inputData} />
        <PopUpButton
          isPagination={isPagination}
          paginationList={paginationList}
          buttonOnClickEvent={buttonOnClickEvent}
          buttonText={buttonText}
        />
        {additionalContent && (
          <AdditionalContent setPopUpOpen={setPopUpOpen} setIsFindPassword={setIsFindPassword} />
        )}
      </S.PopUpWrapper>
    </S.PopUpPosition>
  </S.PopUpComponent>
);

export default PopUp;
