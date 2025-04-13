const userLogin = require("./userLogin");
const { getUsers } = require("./users");
const User = require("./user");

jest.mock("./users", () => ({
  getUsers: jest.fn(),
}));

describe("userLogin", () => {
  beforeEach(() => {
    getUsers.mockReturnValue([
      new User("john", "John123!"),
      new User("jane", "Jane123!"),
    ]);
  });

  it("should return true for correct username/password combo (case 1)", () => {
    const result = userLogin("john", "John123!");
    expect(result).toBe(true);
  });

  it("should return true for correct username/password combo (case 2)", () => {
    const result = userLogin("jane", "Jane123!");
    expect(result).toBe(true);
  });

  it("should return error for wrong password", () => {
    const result = userLogin("john", "WrongPass!");
    expect(result).toBe("Error logging in.");
  });

  it("should return error for unknown username", () => {
    const result = userLogin("noone", "Jane123!");
    expect(result).toBe("Error logging in.");
  });

  it("should return error if both username and password are wrong", () => {
    const result = userLogin("fake", "badpass");
    expect(result).toBe("Error logging in.");
  });
});
