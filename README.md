# User Management System

This is a simple Node.js-based user management system that allows users to register, log in, and change passwords. The system includes password validation and ensures that users cannot use their current password or reuse usernames.

## Features

- **User Registration**: Register a new user with a validated password.
- **User Login**: Log in using a username and password.
- **Change Password**: Change the user's password, provided the old password is correct and the new password meets specified requirements.
- **Password Requirements**: At least one capital letter, one number, one special character, and a minimum length of 8 characters.

## Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate into the project directory:

   ```
   cd <project-directory>
   ```

3. Install the necessary dependencies:

   ```
   npm install
   ```

4. Run the program:

   ```
   node src/main.js
   ```

## File Structure

- `user.js`: A class defining the structure for a user with a username and password.
- `users.js`: Contains functions to manage the user list (add users and retrieve the list).
- `registerUser.js`: Function to handle new user registration, with validation for username and password requirements.
- `login.js`: Function to handle user login by verifying the username and password.
- `changePassword.js`: Function to allow users to change their password with validation.
- `menu.js`: Main script that presents a menu to interact with the system, allowing users to register, log in, or change passwords.
- `src/main.js`: Entry point for the program, where the menu is displayed and the system is run.

## How It Works

1. **Login**: The system checks if the entered username and password match any in the user list.
2. **Register User**: The system checks if the username is already taken and whether the password meets the required criteria.
3. **Change Password**: The system ensures the old password matches and that the new password satisfies the required conditions.
