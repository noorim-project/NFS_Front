import React from 'react';

import { Content_table , Content_tbody , Content_tr , Content_th } from './Main_content';
import MainNoticeContent from './MainNoticeContent';

const MainNoticeTable = () =>{
  return( 
    <Content_table>
      <Content_tbody>
        <Content_tr>
          <Content_th width="50px">번호</Content_th>
          <Content_th width="650px">제목</Content_th>
          <Content_th width="100px">작성자</Content_th>
          <Content_th width="150px">작성일</Content_th>
        </Content_tr>
          <MainNoticeContent name="오준상" number="1" date="2019-07-10" content="와 NFS 너무 유용해!"/>
          <MainNoticeContent name="오준상" number="2" date="2019-07-10" content="와 NFS 너무 유용해!"/>
          <MainNoticeContent name="오준상" number="3" date="2019-07-10" content="와 NFS 너무 유용해!"/>
          <MainNoticeContent name="오준상" number="4" date="2019-07-10" content="와 NFS 너무 유용해!"/>
          <MainNoticeContent name="오준상" number="5" date="2019-07-10" content="와 NFS 너무 유용해!"/>
          <MainNoticeContent name="오준상" number="6" date="2019-07-10" content="와 NFS 너무 유용해!"/>
      </Content_tbody>
    </Content_table> 
  )
}

export default MainNoticeTable;