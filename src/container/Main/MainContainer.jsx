import React, { useState } from 'react';

import { getCookie } from '../../lib';
import { Landing, Main } from '../../components/Main';
import * as S from '../../styles/gloobalStlye';

const MainContainer = () => {
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);
  const [isOpenLanding, setIsOpenLanding] = useState(true);

  setTimeout(() => {
    setIsOpenLanding(false);
  }, 3300);

  return (
    <S.Container>
      {getCookie ? (
        <Main />
      ) : (
        <Landing
          isOpenPopUp={isOpenPopUp}
          setIsOpenPopUp={setIsOpenPopUp}
          isOpenLanding={isOpenLanding}
        />
      )}
    </S.Container>
  );
};

export default MainContainer;
