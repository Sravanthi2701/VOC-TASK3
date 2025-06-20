document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const pwd = document.getElementById('password').value;
  const confirmPwd = document.getElementById('confirmPassword').value;
  const message = document.getElementById('message');

  if (pwd !== confirmPwd) {
    message.style.color = 'red';
    message.textContent = "Passwords do not match!";
    return;
  }

  message.style.color = 'blue';
  message.textContent = "Registration Successful!";
  this.reset();
});
