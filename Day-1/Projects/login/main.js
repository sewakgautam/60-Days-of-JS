function Login() {
  const name = document.getElementById('name').value;
  const pass = document.getElementById('pass').value;

  const full = name + pass;
  if (full == 'SewakGautam') {
    //* eslint-disable-next-line no-alert
    alert('Login Success');
  } else {
    //! eslint-disable-next-line no-alert

    alert('anonymous user try to login');
  }
}
