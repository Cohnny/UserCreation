const { getUsers } = require("./users");

function userLogin(username, password) {
  const userList = getUsers();

  const userMatch = userList.find(
    (user) => user.username === username && user.password === password
  );

  if (userMatch) {
    return false;
  } else {
    return "Error logging in.";
  }
}

module.exports = userLogin;
