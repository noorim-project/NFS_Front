// Type
export const CHANGE_REGISTAR_NEXT_PAGE = 'CHANGE_REGISTAR_NEXT_PAGE';
export const CHANGE_FIND_PW_NEXT_PAGE = 'CHANGE_FIND_PW_NEXT_PAGE';
export const RESET_PAGENATION = 'RESET_PAGENATION';

// Actions
export const changeRegistarNextPage = () => ({
  type: CHANGE_REGISTAR_NEXT_PAGE,
});

export const changeFindPwNextPage = () => ({
  type: CHANGE_FIND_PW_NEXT_PAGE,
});

export const resetPagenation = () => ({
  type: RESET_PAGENATION,
});
