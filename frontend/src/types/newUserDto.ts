import NewUser from "./newUser";

class NewUserDto {
  userName: string;
  email: string;
  password: string;

  constructor(newUser: NewUser) {
    this.userName = newUser.userName;
    this.email = newUser.email;
    this.password = newUser.password;
  }
}

export default NewUserDto;
