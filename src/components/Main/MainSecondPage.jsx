import React from 'react' ;

import MainNoticeTable from './MainNoticeTable';
import { Content_title , Content_div } from './Main_content';

const MainSecondPage = ()=>{
  return(
    <Content_div>
      <Content_title>공지사항</Content_title>
      <MainNoticeTable/>
    </Content_div>
  );
};

export default MainSecondPage;