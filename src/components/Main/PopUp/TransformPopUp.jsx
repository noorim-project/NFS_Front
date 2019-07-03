import React from 'react';

import PopUp from './PopUp';

const TransformPopUp = ({
  title,
  inputData,
  paginationList,
  buttonText,
  moveToNextPage,
  setPopUpClose,
  handlePopUp,
}) => (
  <>
    {inputData.map((e, index) => {
      if (paginationList[index])
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
          />
        );
    })}
  </>
);

export default TransformPopUp;
