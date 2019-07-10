import React from 'react';

import { Header_div, Header_Content } from './Main_content';
// 이런 함수형 컴포넌트 안에 다른 function이나 변수를 넣으면, 안에 값이 state값이 바뀔때마다 render되므로
// 자원을 많이 먹으므로 주의.
const MainHeader = () => {
  return (
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
  );
};
export default MainHeader;
