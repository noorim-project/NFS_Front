import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';

import * as G from '../../../styles/gloobalStlye';
import * as S from '../../../styles/main';
import { PopUpCover } from '../PopUp';
import {
  changeRegistarNextPage,
  changeFindPwNextPage,
  resetPagenation,
} from '../../../core/redux/actions/landingPage';
import LandingView from './LandingView';

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
            resetPagenation={resetPagenation}
          />
        ) : (
          <LandingView
            isOpenLanding={isOpenLanding}
            setPopUpOpen={setPopUpOpen}
            setIsLogin={setIsLogin}
            setIsRegister={setIsRegister}
          />
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
