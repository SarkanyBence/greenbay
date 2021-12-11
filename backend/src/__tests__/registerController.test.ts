import User from "../types/User";
import UserDto from "../types/UserDto";
import { Test, SuperTest } from "supertest";

import server from "./startApp";
import UserStatus from "../types/UserStatus";
const app: SuperTest<Test> = server();

jest.mock("../repositories/userRepository");
jest.mock("../repositories/itemRepository");

describe("Register endpoint tests", () => {
  it("Happy case", async () => {
    const user: User = {
      userName: "userName",
      password: "password",
      email: "email",
    };

    const res = await app.post("/register").send({ data: user });

    const dto: UserDto = {
      id: 1,
      userName: "userName",
      registrateAt: 100,
      status: UserStatus.ACTIVE,
      email: "email",
    };

    expect(res.status).toEqual(200);
    expect(res.body).toEqual(dto);
  });
});
