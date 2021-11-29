import bcrypt from "bcrypt";

const salt = 10;
function encrypt(password: string) {
  return bcrypt.hashSync(password, salt);
}

function verify(password: string, hash: string): boolean {
  return bcrypt.compareSync(password, hash);
}

export { encrypt, verify };
