import React from 'react' ;

import { Component } from '../../styles/gloobalStlye'
import MainNoticeTable from './MainNoticeTable';
import { Content_title , Content_div } from './Main_content';

const MainSecondPage = ()=>{
  return(
    <Component togle="1">
    <Content_div>
      <Content_title>공지사항</Content_title>
      <MainNoticeTable/>
    </Content_div>
    </Component>
  );
};

export default MainSecondPage;