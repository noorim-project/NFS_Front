import React from 'react';

import * as S from '../../../styles/main';
import AdditionalContent from './AdditionalContent';
import cancleButton from '../../../assets/Landing/cancleButton.svg';
import PopUpButton from './PopUpButton';
import PopUpContent from './PopUpContent';

const PopUp = ({
  title,
  inputData,
  buttonText,
  additionalContent,
  isPagination,
  paginationList,
  buttonOnClickEvent,
  setIsFindPassword,
  setPopUpOpen,
  setPopUpClose,
  handlePopUp,
  isCheckContent,
  setIsLogin,
  resetPagenation,
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
        <PopUpContent inputData={inputData} isCheckContent={isCheckContent} />
        <PopUpButton
          isPagination={isPagination}
          paginationList={paginationList}
          buttonOnClickEvent={buttonOnClickEvent}
          buttonText={buttonText}
          isCheckContent={isCheckContent}
          setIsLogin={setIsLogin}
          handlePopUp={handlePopUp}
          resetPagenation={resetPagenation}
        />
        {additionalContent && (
          <AdditionalContent setPopUpOpen={setPopUpOpen} setIsFindPassword={setIsFindPassword} />
        )}
      </S.PopUpWrapper>
    </S.PopUpPosition>
  </S.PopUpComponent>
);

export default PopUp;
