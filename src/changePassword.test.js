const changePassword = require("./changePassword");
const { getUsers } = require("./users");

jest.mock("./users", () => ({
  getUsers: jest.fn(),
}));

describe("changePassword - tests all requirement points", () => {
  let mockUsers;

  beforeEach(() => {
    mockUsers = [
      { username: "alice", password: "Test123!" },
      { username: "bob", password: "BobOld456!" },
    ];
    getUsers.mockReturnValue(mockUsers);
  });

  it("should return error if user does not exist (case 1)", () => {
    const result = changePassword("charlie", "AnyPass1!", "NewPass1!");
    expect(result).toBe("User does not exists");
  });

  it("should return error if user does not exist (case 2)", () => {
    const result = changePassword("", "pass", "Pass123!");
    expect(result).toBe("User does not exists");
  });

  it("should return error if old password is incorrect (case 1)", () => {
    const result = changePassword("alice", "WrongPass!", "NewStrong1!");
    expect(result).toBe("Current password is incorrect");
  });

  it("should return error if old password is incorrect (case 2)", () => {
    const result = changePassword("bob", "Wrong123", "NewStrong1!");
    expect(result).toBe("Current password is incorrect");
  });

  it("should return error if new password is the same as old (case 1)", () => {
    const result = changePassword("alice", "Test123!", "Test123!");
    expect(result).toBe("Can't change to same password");
  });

  it("should return error if new password is the same as old (case 2)", () => {
    const result = changePassword("bob", "BobOld456!", "BobOld456!");
    expect(result).toBe("Can't change to same password");
  });

  it("should return error if new password doesn't meet requirements (case 1)", () => {
    const result = changePassword("alice", "Test123!", "short");
    expect(result).toBe("New password doesn't meet the requirements.");
  });

  it("should return error if new password doesn't meet requirements (case 2)", () => {
    const result = changePassword("bob", "BobOld456!", "nouppercase1!");
    expect(result).toBe("New password doesn't meet the requirements.");
  });

  it("should successfully change password when all conditions are met (case 1)", () => {
    const result = changePassword("alice", "Test123!", "NewPass1!");
    expect(result).toBe(true);
    expect(mockUsers[0].password).toBe("NewPass1!");
  });

  it("should successfully change password when all conditions are met (case 2)", () => {
    const result = changePassword("bob", "BobOld456!", "NewBob123!");
    expect(result).toBe(true);
    expect(mockUsers[1].password).toBe("NewBob123!");
  });
});
