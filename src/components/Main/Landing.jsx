import React from 'react';

import { Component } from '../../styles/gloobalStlye';
import {
  LandingTeamText,
  LandingContents,
  LadingSubtitleText,
  LandingComponent,
  LandingItems,
  LandingMessage,
  LandingButtonCover,
} from '../../styles/main';
import LandingButton from './LandingButton';

const Landing = () => (
  <LandingComponent>
    <Component>
      <LandingItems>
        <LandingTeamText>NFS</LandingTeamText>
        <LandingContents>
          <LadingSubtitleText>Noorim For Students</LadingSubtitleText>
          <LandingMessage>
            학생들의
            <br />
            편리함을 추구합니다
          </LandingMessage>
          <LandingButtonCover>
            <LandingButton pathURL="/login" content="로그인" />
            <div className="filter" />
            <LandingButton pathURL="/register" content="회원가입" />
          </LandingButtonCover>
        </LandingContents>
      </LandingItems>
    </Component>
  </LandingComponent>
);

export default Landing;
