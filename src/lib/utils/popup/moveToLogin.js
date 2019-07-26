function closeOtherPopUp(setIsOtherPopUp) {
  setIsOtherPopUp(false);
}

export function moveToLogin(setIsOtherPopUp, setIsLogin, resetPagenation) {
  closeOtherPopUp(setIsOtherPopUp);
  setIsLogin(true);
  resetPagenation();
}
