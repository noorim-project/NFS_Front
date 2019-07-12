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
  [
    {
      title: '회원가입 완료',
      checkContentMain: '회원가입이 성공적으로 완료 되었습니다.',
      checkContentSub: 'NFS 서비스를 사용하실 수 있습니다.',
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
  [
    {
      title: '비밀번호 변경 완료',
      checkContentMain: '비밀번호가 성공적으로 변경 되었습니다.',
      checkContentSub: '이제부터 변경된 비밀번호로 로그인 하실 수 있습니다.',
    },
  ],
];
