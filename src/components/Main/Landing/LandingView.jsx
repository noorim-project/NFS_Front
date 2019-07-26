import React from 'react';

import * as S from '../../../styles/main';
import { LandingButton } from '..';

const LandingView = ({ isOpenLanding, setPopUpOpen, setIsLogin, setIsRegister }) => (
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
        <LandingButton clickEvent={setPopUpOpen} changedEvent={setIsLogin} content="로그인" />
        <div className="filter" />
        <LandingButton clickEvent={setPopUpOpen} changedEvent={setIsRegister} content="회원가입" />
      </S.LandingButtonCover>
    </S.LandingContents>
  </S.LandingItems>
);

export default LandingView;
