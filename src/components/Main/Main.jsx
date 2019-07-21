import React from 'react';

import MainFirstPage from './MainFirstPage';
import MainSecondPage from './MainSecondPage';
import MainThirdPage from './MainThirdPage';
import * as S from '../../styles/main';

const Main = () => (
  <S.MainComponent>
    <MainFirstPage />
    <MainSecondPage />
    <MainThirdPage/>
  </S.MainComponent>
);

export default Main;
