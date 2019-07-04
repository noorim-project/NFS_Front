import React from 'react';

import { PopUpText } from '../../../styles/main';

const AdditionalContent = ({ setPopUpOpen, setIsFindPassword }) => (
  <div className="additionalContent">
    <PopUpText color="#737373" size="14px" marginRight="10px">
      비밀번호를 잊으셨나요?
    </PopUpText>
    <PopUpText
      color="#000000"
      size="14px"
      marginRight="8px"
      cursorPointer
      onClick={() => setPopUpOpen(setIsFindPassword)}
    >
      비밀번호 찾기
    </PopUpText>
  </div>
);

export default AdditionalContent;
