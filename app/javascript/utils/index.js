const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validateEmail = (email) => emailRegex.test(email);

export const matchPassword = (p1, p2) => p1 === p2;

export const validatePassword = (pass) => {
  if (pass.length < 8) return { error: 'Password should be at least 8 characters' };
  if (pass.length > 32) return { error: 'Password should be no more than 32 characters' };
  if (!/.*\d.*/.test(pass)) return { error: 'Password should contain at least 1 digit' };
  if (!/.*[a-z].*/.test(pass)) return { error: 'Password should contain at least 1 lowercase character' };
  if (!/.*[A-Z].*/.test(pass)) return { error: 'Password should contain at least 1 uppercase character' };
  if (!/.*[*.!@#$%^&(){}[\]:";'<>,.?~`_+-=|\\].*/.test(pass)) return { error: 'Password should contain at least 1 special character' };

  return true;
}
