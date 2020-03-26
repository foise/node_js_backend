document.querySelector(".registration-form").onsubmit = async function (event) {
  event.preventDefault();
  const inputUsername = event.target.querySelector('input[name="username"]').value;
  const inputEmail = event.target.querySelector('input[name="email"]').value;
  console.log("submit", inputUsername, inputEmail);

  let user = {
    table: [{
      username: inputUsername,
      email: inputEmail
    }]
  };
  user = JSON.stringify(user);
  await fetch('http://127.0.0.1:80/user-register', {
    method: 'POST',
    body: user
  });
};

window.onload = async function () {
  let data = await fetch('http://127.0.0.1:80/users', {
    method: 'GET'
  }).then(response => response.json());
  console.log(data);

  let userlist = document.querySelector('.user');
  for (var i = 0; i < data.table.length; i++) {
    userlist.innerHTML = userlist.innerHTML + '<br>' + ' ' + 'Username: ' + data.table[i].username + '<br>' + ' E-Mail: ' + data.table[i].email + '<br>';
  }
};