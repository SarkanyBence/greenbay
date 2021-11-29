import UserStatus from "./UserStatus";
import { encrypt } from "../utils/Bcrypt";

class User {
  id: number;
  userName: string;
  password: string;
  registrateAt: number;
  status: UserStatus;

  constructor(userName: string, password: string) {
    this.userName = userName;
    this.status = UserStatus.PENDING;
    this.password = encrypt(password);
  }
}

export default User;
