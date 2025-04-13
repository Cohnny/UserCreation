const { getUsers } = require("./users");

function changePassword(username, oldPassword, newPassword) {
  usersList = getUsers();
  var userFound = null;

  for (var i = 0; i < usersList.length; i++) {
    if (usersList[i].username === username) {
      userFound = usersList[i];
    }
  }

  if (!userFound) {
    return "User does not exists";
  }

  if (userFound.password !== oldPassword) {
    return "Current password is incorrect";
  }

  if (oldPassword === newPassword) {
    return "Can't change to same password";
  }

  // At least one capital letter, one number, one special char and 8 chars
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()+=<>?/{}|~]).{8,}$/;
  const isPasswordValid = passwordRegex.test(newPassword);
  if (!isPasswordValid) {
    return "New password doesn't meet the requirements.";
  }

  userFound.password = newPassword;

  return true;
}

module.exports = changePassword;
