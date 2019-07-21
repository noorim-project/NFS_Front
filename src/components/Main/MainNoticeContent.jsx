import React from 'react'

import { Content_tr , Content_td } from './Main_content'

const MainNoticeContent = ({number,
  name,
  content,
  date,}) =>
  {
  return(
    <Content_tr>
      <Content_td><a href="#">{number}</a></Content_td>
      <Content_td left="50px" align="left"><a href="#">{content}</a></Content_td>
      <Content_td><a href="#">{name}</a></Content_td>
      <Content_td><a href="#">{date}</a></Content_td>
    </Content_tr>
  );
};

export default MainNoticeContent;
