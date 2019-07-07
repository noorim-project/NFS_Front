import React from 'react';

import { Component } from '../../styles/gloobalStlye';
import { MainComponent } from '../../styles/main';
import  { Header_div }  from './Main_Header_content';
import { Header_Content } from './Main_Header_content';
const Main = () => (
    <MainComponent>
      <Component>
        <Header_div>
          <Header_Content href="#">공지사항</Header_Content>
          <Header_Content href="#">건의사항</Header_Content>
          <Header_Content href="#">캘린더</Header_Content>
          <Header_Content href="#">시간표</Header_Content>
          <Header_Content href="#">선생님 자리</Header_Content>
          <Header_Content href="#">외출신청</Header_Content>
          <Header_Content href="#">운동신청</Header_Content>
          <Header_Content href="#">전공 동아리</Header_Content>
        </Header_div>
      </Component>
    </MainComponent>
);

export default Main;
