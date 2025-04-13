const User = require("./user");
const { getUsers } = require("./users");

function registerUser(username, password) {
  const userList = getUsers();

  const userExists = userList.some((user) => user.username === username);
  if (userExists) {
    return "Username already exists.";
  }

  // At least one capital letter, one number, one special char and 8 chars
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()+=<>?/{}|~]).{8,}$/;
  const isPasswordValid = passwordRegex.test(password);
  if (!isPasswordValid) {
    return "Password doesn't meet the requirements.";
  }

  const newUser = new User(username, password);

  return newUser;
}

module.exports = registerUser;
