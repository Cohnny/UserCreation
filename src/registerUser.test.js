const registerUser = require("./registerUser");
const { getUsers } = require("./users");
const User = require("./user");

jest.mock("./users", () => ({
  getUsers: jest.fn(),
}));

describe("registerUser", () => {
  beforeEach(() => {
    getUsers.mockReset();
  });

  it("should return error if username already exists", () => {
    getUsers.mockReturnValue([new User("existingUser", "ValidPass123!")]);

    const result = registerUser("existingUser", "NewPass123!");
    expect(result).toBe("Username already exists.");
  });

  it("should return error if password does not meet the requirements", () => {
    getUsers.mockReturnValue([]);

    const result = registerUser("newUser", "weakpass");
    expect(result).toBe("Password doesn't meet the requirements.");
  });

  it("should return a new user if username is available and password is valid", () => {
    getUsers.mockReturnValue([]);

    const result = registerUser("newUser", "ValidPass123!");
    expect(result).toBeInstanceOf(User);
    expect(result.username).toBe("newUser");
    expect(result.password).toBe("ValidPass123!");
  });
});
