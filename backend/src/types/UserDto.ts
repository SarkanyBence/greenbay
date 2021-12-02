import User from "./User";
import UserStatus from "./UserStatus";

class UserDto {
  id: number;
  userName: string;
  registrateAt: number;
  status: UserStatus;

  constructor(user: User) {
    this.id = user.id;
    this.userName = user.userName;
    this.registrateAt = user.registrateAt;
    this.status = user.status;
  }
}

export default UserDto;
