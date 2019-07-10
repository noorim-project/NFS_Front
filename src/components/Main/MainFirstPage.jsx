import React from 'react';

import Main_Header from './Main_Header';
import { Design_div , Design_text , FirstPageDiv } from './Main_content';

const HeaderFirstPage = ()=> {
  return (
    <FirstPageDiv>
      <Main_Header></Main_Header>
      <Design_div/>
      <Design_text>학생들의 편리함을 추구합니다.</Design_text>
    </FirstPageDiv>
  );
};

export default HeaderFirstPage;
