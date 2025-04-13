const prompt = require("prompt-sync")();
const registerUser = require("./registerUser");
const { addUser } = require("./users");
const userLogin = require("./login");
const changePassword = require("./changePassword");

function showMenu() {
  console.log("TESTING GIT ACTIONS");
  while (true) {
    console.log("\n1. Login");
    console.log("2. Register User");
    console.log("3. Change Password");
    console.log("0. Exit");

    const choice = parseInt(prompt("Enter choice (1-3 or 0 to exit): "));

    switch (choice) {
      case 1:
        const loginUsername = prompt("Username: ");
        const loginPassword = prompt("Password: ");
        const loginUser = userLogin(loginUsername, loginPassword);

        if (loginUser == true) {
          console.log("Logged in successfully.");
        } else {
          console.log(loginUser);
        }
        break;
      case 2:
        const registerUsername = prompt("Username: ");
        const registerPassword = prompt("Password: ");

        const registeredUser = registerUser(registerUsername, registerPassword);

        if (typeof registeredUser === "string") {
          console.log(registeredUser);
        } else {
          addUser(registeredUser);
          console.log("User registered.");
        }
        break;
      case 3:
        const username = prompt("Username: ");
        const oldPassword = prompt("Password: ");
        const newPassword = prompt("New password: ");
        const change = changePassword(username, oldPassword, newPassword);

        if (change == true) {
          console.log("Password changed successfully.");
        } else {
          console.log(change);
        }

        break;
      case 0:
        console.log("Exiting...");
        process.exit(0);
      default:
        console.log("Invalid input, please select a number 1-3 or 0 to exit.");
    }
  }
}

showMenu();
