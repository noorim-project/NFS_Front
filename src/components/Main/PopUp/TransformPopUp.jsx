import React from 'react';

import PopUp from './PopUp';
import { moveToLogin } from '../../../lib/utils/popup/moveToLogin';

const TransformPopUp = ({
  title,
  inputData,
  paginationList,
  buttonText,
  moveToNextPage,
  setPopUpClose,
  handlePopUp,
  setIsLogin,
  resetPagenation,
}) => (
  <>
    {inputData.map((e, index) => {
      if (paginationList[index] && !paginationList[paginationList.length - 1]) {
        return (
          <PopUp
            key={index}
            title={title}
            inputData={e}
            buttonText={buttonText}
            isPagination
            paginationList={paginationList}
            buttonOnClickEvent={moveToNextPage}
            setPopUpClose={setPopUpClose}
            handlePopUp={handlePopUp}
            isCheckContent={false}
          />
        );
      } else if (paginationList[index] && paginationList[paginationList.length - 1]) {
        return (
          <PopUp
            key={index}
            title={title}
            inputData={e}
            buttonText={buttonText}
            isPagination
            paginationList={paginationList}
            buttonOnClickEvent={moveToLogin}
            setPopUpClose={setPopUpClose}
            handlePopUp={handlePopUp}
            setIsLogin={setIsLogin}
            isCheckContent={true}
            resetPagenation={resetPagenation}
          />
        );
      }
    })}
  </>
);

export default TransformPopUp;
