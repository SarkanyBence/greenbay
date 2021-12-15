import UserStatus from "./UserStatus";
import * as bcrypt from "../utils/Bcrypt";

class User {
  id?: number;
  userName: string;
  password: string;
  email?: string;
  registrateAt?: number;
  status?: UserStatus;

  constructor(userName: string, password: string, email?: string) {
    this.userName = userName;
    this.status = UserStatus.PENDING;
    this.password = bcrypt.encrypt(password);
    this.email = email;
  }
}

export default User;
