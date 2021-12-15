import User from "../../types/User";
import UserStatus from "../../types/UserStatus";

export = {
  save: function (user: User): Promise<User> {
    return new Promise((resolve, reject) => {
      resolve({
        id: 1,
        userName: user.userName,
        email: user.email,
        password:
          "$2a$10$a2gB46NK3CsofH1EbWIfN.dH7wjeQXccX1slbtUyus5ot6xArhYb.",
        registrateAt: 100,
        status: UserStatus.ACTIVE,
      });
    });
  },

  findById: function (id: number): Promise<User> {
    return new Promise((resolve, reject) => {
      resolve({
        id: id,
        userName: "userName",
        email: "user@mail.com",
        password:
          "$2a$10$a2gB46NK3CsofH1EbWIfN.dH7wjeQXccX1slbtUyus5ot6xArhYb.",
        registrateAt: 100,
        status: UserStatus.ACTIVE,
      });
    });
  },

  findByName: function (userName: string): Promise<User> {
    return new Promise((resolve, reject) => {
      if (userName === "wrongUsername") {
        reject("Username or password is incorrect.");
      }
      resolve({
        id: 1,
        userName: userName,
        email: "user@mail.com",
        password:
          "$2a$10$a2gB46NK3CsofH1EbWIfN.dH7wjeQXccX1slbtUyus5ot6xArhYb.",
        registrateAt: 100,
        status: UserStatus.ACTIVE,
      });
    });
  },

  existsByName: function (userName: string): Promise<boolean> {
    return new Promise((resolve) => resolve(false));
  },
};
