const User = require("./user");

let usersList = [];

const user1 = new User("John", "Abc123!");
const user2 = new User("Jane", "321cbA!");

usersList.push(user1);
usersList.push(user2);

function getUsers() {
  return usersList;
}

function addUser(user) {
  usersList.push(user);
}

module.exports = {
  getUsers,
  addUser,
};
