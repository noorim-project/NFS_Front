import React from 'react';
import * as S from '../../../styles/main';

const PopUpInput = ({ inputData }) =>
  inputData.map((i, index) => (
    <S.PopUpInputCover key={index} marginTop={i.marginTop}>
      <S.PopUpInput
        marginRight={i.marginRight}
        widthSize={i.size}
        placeholder={i.placeholder}
        type={i.type}
      />
      {i.citationButton && (
        <S.PopUpButton small>
          <S.PopUpText size="10px" cursorPointer>
            {i.citationText}
          </S.PopUpText>
        </S.PopUpButton>
      )}
    </S.PopUpInputCover>
  ));

export default PopUpInput;
