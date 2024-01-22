const password = document.getElementById('password');
const eyeIcon = document.getElementById('eyeIcon');

eyeIcon.onclick = function () {
  if (password.type == 'password') {
    password.type = 'text';
    eyeIcon.src = './app/img/eye open.png';
  } else {
    password.type = 'password';
    eyeIcon.src = './app/img/eye close.png';
  }
};
