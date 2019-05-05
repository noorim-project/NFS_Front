import React from 'react';
import Axios from 'axios';

import { Landing, MainComponent } from '../../components/Main';
import { MainContainer } from '../../styles/main';

const Main = () => {
  const Login
  return (
    <MainContainer>{localStorage.getItem('token') ? <MainComponent /> : <Landing />}</MainContainer>
  );
};

export default Main;
