const { getUsers, addUser } = require("./users");
const User = require("./user");

describe("users module - getUsers and addUser", () => {
  beforeEach(() => {
    getUsers().length = 0;
  });

  it("should return an empty list initially", () => {
    expect(getUsers()).toEqual([]);
  });

  it("should add a user and return it in the list", () => {
    const newUser = new User("Alice", "Secure123!");
    addUser(newUser);
    expect(getUsers()).toContain(newUser);
  });

  it("should add multiple users", () => {
    const userA = new User("UserA", "PassA123!");
    const userB = new User("UserB", "PassB123!");
    addUser(userA);
    addUser(userB);
    expect(getUsers().length).toBe(2);
    expect(getUsers()).toEqual(expect.arrayContaining([userA, userB]));
  });
});
