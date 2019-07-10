import React from 'react';

import { PopUp, TransformPopUp } from '.';
import { LOGIN_INPUT_DATA, REGISTER_INPUT_DATA, FIND_PASSWORD_INPUT_DATA } from './constance';

const PopUpCover = ({
  isLogin,
  setIsLogin,
  isRegister,
  setIsRegister,
  isFindPassword,
  setIsFindPassword,
  registarPaginationList,
  registarButtonText,
  findPasswordPaginationList,
  findPasswordButtonText,
  moveToRegistarNextPage,
  moveToFindPwNextPage,
  setPopUpOpen,
  setPopUpClose,
  resetPagenation,
}) => (
  <>
    {isLogin && (
      <PopUp
        title="로그인"
        inputData={LOGIN_INPUT_DATA}
        buttonText="로그인"
        additionalContent
        setPopUpOpen={setPopUpOpen}
        setIsFindPassword={setIsFindPassword}
        setPopUpClose={setPopUpClose}
        handlePopUp={setIsLogin}
        isCheckContent={false}
      />
    )}
    {isRegister && (
      <TransformPopUp
        title="회원가입"
        inputData={REGISTER_INPUT_DATA}
        paginationList={registarPaginationList}
        buttonText={registarButtonText}
        moveToNextPage={moveToRegistarNextPage}
        setPopUpClose={setPopUpClose}
        setIsLogin={setIsLogin}
        handlePopUp={setIsRegister}
        resetPagenation={resetPagenation}
      />
    )}
    {isFindPassword && (
      <TransformPopUp
        title="비밀번호 찾기"
        inputData={FIND_PASSWORD_INPUT_DATA}
        paginationList={findPasswordPaginationList}
        buttonText={findPasswordButtonText}
        moveToNextPage={moveToFindPwNextPage}
        setPopUpClose={setPopUpClose}
        setIsLogin={setIsLogin}
        handlePopUp={setIsFindPassword}
        resetPagenation={resetPagenation}
      />
    )}
  </>
);

export default PopUpCover;
