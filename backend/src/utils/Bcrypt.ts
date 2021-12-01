import bcrypt from "bcrypt";

const salt = 10;
function encrypt(password: string) {
  return bcrypt.hashSync(password, salt);
}

function verify(passToCheck: string, savedPass: string): boolean {
  return bcrypt.compareSync(passToCheck, savedPass);
}

export { encrypt, verify };
