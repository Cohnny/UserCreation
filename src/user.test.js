const User = require("./user");

describe("User class", () => {
  it("should create a user with the correct username and password", () => {
    const user = new User("TestUser", "TestPass123!");
    expect(user.username).toBe("TestUser");
    expect(user.password).toBe("TestPass123!");
  });

  it("should allow creating multiple unique users", () => {
    const user1 = new User("User1", "Pass1!");
    const user2 = new User("User2", "Pass2!");
    expect(user1.username).not.toBe(user2.username);
    expect(user1.password).not.toBe(user2.password);
  });
});
