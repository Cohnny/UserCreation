const readline = require("readline")
const User = require("./user")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let usersList = [];

const user1 = new User("John", "123");
const user2 = new User("Jane", "321");

usersList.push(user1);
usersList.push(user2);

const menu =
    "Menu\n" +
    "1. Login\n" +
    "2. Register User\n" +
    "3. Change Password\n" +
    "0. Exit";

const getUserInput = () => {
    console.log(menu);
    rl.question("Input a number (1-3 or 0 to exit): ", (userInput) => {
        const choice = parseInt(userInput);

        switch (choice) {
            case 1:
                console.log("Login");
                break;
            case 2:
                console.log("Register User");
                break;
            case 3:
                console.log("Change Password");
                break;
            case 0:
                console.log("Exiting...")
                rl.close();
                return;
            default:
                console.log("Invalid input, please select a number 1-3 or 0 to exit.");
        }
        console.log()
        getUserInput();
    });
};

getUserInput();
