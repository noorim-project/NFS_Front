export const LOGIN_INPUT_DATA = [
  { marginTop: '70px', placeholder: '아이디', type: 'text' },
  { marginTop: '40px', placeholder: '비밀번호', type: 'password' },
];

export const REGISTER_INPUT_DATA = [
  [
    { marginTop: '70px', placeholder: '아이디', type: 'text' },
    { marginTop: '40px', placeholder: '비밀번호', type: 'password' },
    { marginTop: '40px', placeholder: '비밀번호 확인', type: 'password' },
  ],
  [
    {
      marginTop: '70px',
      marginRight: '10px',
      placeholder: '이메일',
      type: 'email',
      size: '300px',
      citationButton: true,
      citationText: '인증번호 발송',
    },
    {
      marginTop: '40px',
      marginRight: '10px',
      placeholder: '인증번호',
      type: 'text',
      size: '300px',
      citationButton: true,
      citationText: '인증번호 확인',
    },
  ],
];

export const FIND_PASSWORD_INPUT_DATA = [
  [
    { marginTop: '70px', placeholder: '이메일', type: 'email' },
    { marginTop: '40px', placeholder: '비밀번호', type: 'password' },
  ],
  [
    {
      marginTop: '70px',
      marginRight: '10px',
      placeholder: '이메일',
      type: 'email',
      size: '350px',
      citationButton: true,
      citationText: '인증번호 발송',
    },
    {
      marginTop: '40px',
      marginRight: '10px',
      placeholder: '인증번호',
      type: 'number',
      size: '350px',
      citationButton: true,
      citationText: '인증번호 확인',
    },
  ],
  [
    { marginTop: '70px', placeholder: '새 비밀번호', type: 'password' },
    { marginTop: '40px', placeholder: '새 비밀번호 확인', type: 'password' },
  ],
];
