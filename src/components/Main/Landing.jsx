import React from 'react';

import { Component } from '../../styles/gloobalStlye';
import {
  LandingTeamText,
  LandingContents,
  LadingSubtitleText,
  LandingComponent,
} from '../../styles/main';

const Landing = () => (
  <LandingComponent>
    <Component>
      <LandingTeamText>NFS</LandingTeamText>
      <LandingContents>
        <LadingSubtitleText>Noorim For Students</LadingSubtitleText>
      </LandingContents>
    </Component>
  </LandingComponent>
);

export default Landing;
