import React from 'react';

import { Component } from '../../styles/gloobalStlye'
import Main_Header from './Main_Header';
import { Design_div , Design_text , FirstPageDiv } from './Main_content';
import * as S from './Main_content'
const HeaderFirstPage = ()=> {
  return (
    <Component>
    <FirstPageDiv>
      <Main_Header></Main_Header>
      <Design_div/>
      <Design_text>학생들의 편리함을 추구합니다.</Design_text>
      <S.Design_bar BackgroundColor="white"/>
      <S.Design_squre BackgroundColor="white" Left="1000px" Top="294px"/>
      <S.Design_squre BackgroundColor="white" Left="1000px" Top="573px"/>
      <S.Design_squre BackgroundColor="#ff2f6f" Left="860px" Top="434px"/>
    </FirstPageDiv>
    </Component>
  );
};

export default HeaderFirstPage;
