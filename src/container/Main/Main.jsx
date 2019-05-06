import React from 'react';

import { Landing, MainComponent } from '../../components/Main';
import { Container } from '../../styles/gloobalStlye';

const Main = () => (
  <Container>{localStorage.getItem('token') ? <MainComponent /> : <Landing />}</Container>
);

export default Main;
