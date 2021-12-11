import app from "../server";
import supertest, { Test, SuperTest } from "supertest";

export default function startApp() {
  const api: SuperTest<Test> = supertest(app);
  return api;
}
