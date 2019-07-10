import React from 'react'

import { Content_tr , Content_td } from './Main_content'

const MainNoticeContent = ({number,
  name,
  content,
  date,}) =>
  {
  return(
    <Content_tr>
      <Content_td>{number}</Content_td>
      <Content_td left="50px" align="left">{content}</Content_td>
      <Content_td>{name}</Content_td>
      <Content_td>{date}</Content_td>
    </Content_tr>
  );
};

export default MainNoticeContent;
