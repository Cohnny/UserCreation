const userLogin = require("./login"); // Import the function you want to test
const { getUsers } = require("./users"); // Import getUsers to mock it

jest.mock("./users", () => ({
  getUsers: jest.fn(),
}));

describe("userLogin", () => {
  beforeEach(() => {
    const User = require("./user");

    getUsers.mockReturnValue([
      new User("John", "Abc123!"),
      new User("Jane", "321cbA!"),
    ]);
  });

  it("should log in successfully with correct username and password", () => {
    const result = userLogin("John", "Abc123!");
    expect(result).toBe(true);
  });

  it("should fail when the username is incorrect", () => {
    const result = userLogin("WrongUser", "Abc123!");
    expect(result).toBe("Error logging in.");
  });

  it("should fail when the password is incorrect", () => {
    const result = userLogin("John", "WrongPassword");
    expect(result).toBe("Error logging in.");
  });

  it("should fail when the username and password don't match", () => {
    const result = userLogin("Jane", "WrongPassword");
    expect(result).toBe("Error logging in.");
  });
});
