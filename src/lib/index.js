// cookie
const getCookie = sessionStorage.getItem('token');
function setCookie(value) {
  sessionStorage.setItem('token', value);
}

export { getCookie, setCookie };
