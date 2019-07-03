import { CHANGE_REGISTAR_NEXT_PAGE, CHANGE_FIND_PW_NEXT_PAGE } from '../../actions/landingPage';

let isActive = false;

const initialState = {
  registarPaginationList: [1, 0, 0],
  registarButtonText: '다음',
  findPasswordPaginationList: [1, 0, 0, 0],
  findPasswordButtonText: '다음',
};

const landingReducer = (state = initialState, action) => {
  const { registarPaginationList, findPasswordPaginationList } = state;
  switch (action.type) {
    case CHANGE_REGISTAR_NEXT_PAGE:
      return {
        ...state,
        registarPaginationList: registarPaginationList.map(e => {
          if (e) {
            isActive = true;
            return 0;
          }
          if (isActive) {
            isActive = false;
            return 1;
          }
          return 0;
        }),
        registarButtonText: registarPaginationList[registarPaginationList.length - 2]
          ? '로그인 화면으로'
          : '다음',
      };
    case CHANGE_FIND_PW_NEXT_PAGE:
      return {
        ...state,
        findPasswordPaginationList: findPasswordPaginationList.map(e => {
          if (e) {
            isActive = true;
            return 0;
          }
          if (isActive) {
            isActive = false;
            return 1;
          }
          return 0;
        }),
        findPasswordButtonText: findPasswordPaginationList[findPasswordPaginationList.lenght - 2]
          ? '로그인 화면으로'
          : '다음',
      };
    default:
      return state;
  }
};

export default landingReducer;
