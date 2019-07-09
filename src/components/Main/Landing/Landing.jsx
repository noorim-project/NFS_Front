import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';

import * as G from '../../../styles/gloobalStlye';
import * as S from '../../../styles/main';
import { LandingButton } from '..';
import { PopUpCover } from '../PopUp';
import {
  changeRegistarNextPage,
  changeFindPwNextPage,
  resetPagenation,
} from '../../../core/redux/actions/landingPage';

const Landing = ({
  isOpenPopUp,
  setIsOpenPopUp,
  isOpenLanding,
  registarPaginationList,
  registarButtonText,
  findPasswordPaginationList,
  findPasswordButtonText,
  moveToRegistarNextPage,
  moveToFindPwNextPage,
  resetPagenation,
}) => {
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [isFindPassword, setIsFindPassword] = useState(false);

  const setPopUpOpen = useCallback(changedEvent => {
    setIsOpenPopUp(true);
    changedEvent(true);
  }, []);

  const setPopUpClose = useCallback(changedEvent => {
    setIsOpenPopUp(false);
    changedEvent(false);
    resetPagenation();
  }, []);

  return (
    <S.LandingComponent>
      {isOpenPopUp && <div className="popUpCover" />}
      <G.Component>
        {isOpenPopUp ? (
          <PopUpCover
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            isRegister={isRegister}
            setIsRegister={setIsRegister}
            isFindPassword={isFindPassword}
            setIsFindPassword={setIsFindPassword}
            registarPaginationList={registarPaginationList}
            registarButtonText={registarButtonText}
            findPasswordPaginationList={findPasswordPaginationList}
            findPasswordButtonText={findPasswordButtonText}
            moveToRegistarNextPage={moveToRegistarNextPage}
            moveToFindPwNextPage={moveToFindPwNextPage}
            setPopUpOpen={setPopUpOpen}
            setPopUpClose={setPopUpClose}
          />
        ) : (
          <S.LandingItems isOpenLanding={isOpenLanding}>
            <S.LandingTeamText>NFS</S.LandingTeamText>
            <S.LandingContents isOpenLanding={isOpenLanding}>
              <S.LadingSubtitleText>Noorim For Students</S.LadingSubtitleText>
              <S.LandingMessage>
                학생들의
                <br />
                편리함을 추구합니다
              </S.LandingMessage>
              <S.LandingButtonCover>
                <LandingButton
                  clickEvent={setPopUpOpen}
                  changedEvent={setIsLogin}
                  content="로그인"
                />
                <div className="filter" />
                <LandingButton
                  clickEvent={setPopUpOpen}
                  changedEvent={setIsRegister}
                  content="회원가입"
                />
              </S.LandingButtonCover>
            </S.LandingContents>
          </S.LandingItems>
        )}
      </G.Component>
    </S.LandingComponent>
  );
};

const mapStateToProps = state => ({
  registarPaginationList: state.landingReducer.registarPaginationList,
  registarButtonText: state.landingReducer.registarButtonText,
  findPasswordPaginationList: state.landingReducer.findPasswordPaginationList,
  findPasswordButtonText: state.landingReducer.findPasswordButtonText,
});

const mapDispatchToProps = dispatch => ({
  moveToRegistarNextPage: () => dispatch(changeRegistarNextPage()),
  moveToFindPwNextPage: () => dispatch(changeFindPwNextPage()),
  resetPagenation: () => dispatch(resetPagenation()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Landing);
