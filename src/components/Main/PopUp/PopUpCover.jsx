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
        handlePopUp={setIsRegister}
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
        handlePopUp={setIsFindPassword}
      />
    )}
  </>
);

export default PopUpCover;
