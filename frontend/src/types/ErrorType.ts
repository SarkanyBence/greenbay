enum ErrorType {
  NAME = "Name should be at least 3 characters",
  DESCRIPTION = "Description should be 3-100 characters",
  PRICE = "Price is reqired",
  URL = "Main photo url is reqired",
  ADDURL = "Only valid url is accepted",
  PASSWORD = "Password should be 8-20 characters!",
  COMFIRMPASSWORDS = "Passwords don't match",
  USERNAME = "Username should be 3-16 characters, no special characters allowed!",
  EMAIL = "It should be a valid email address!",
  LOGIN = "Username or password is incorrect",
}

export default ErrorType;
