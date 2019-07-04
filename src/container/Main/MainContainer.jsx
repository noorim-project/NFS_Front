import React, { useState } from 'react';

import { getCookie } from '../../lib';
import { Landing, Main } from '../../components/Main';
import * as S from '../../styles/gloobalStlye';

const MainContainer = () => {
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);

  return (
    <S.Container>
      {getCookie ? <Main /> : <Landing isOpenPopUp={isOpenPopUp} setIsOpenPopUp={setIsOpenPopUp} />}
    </S.Container>
  );
};

export default MainContainer;
