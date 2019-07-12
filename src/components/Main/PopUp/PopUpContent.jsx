import React from 'react';

import PopUpInput from './PopUpInput';
import CheckPopUp from './CheckPopUp';

const PopUpContent = ({ inputData, isCheckContent }) => (
  <>
    {isCheckContent ? <CheckPopUp inputData={inputData} /> : <PopUpInput inputData={inputData} />}
  </>
);

export default PopUpContent;
