import { randomBytes, scryptSync, timingSafeEqual } from 'crypto';

export class HashPass {

  constructor(pass) {
    this.salt = randomBytes(16).toString('hex');
    this.pass = pass;
  }

  createHash(){
    const password = scryptSync(this.pass, this.salt, 16)
      .toString('hex');

    return {password, salt: this.salt};
  }

  static verifyPass(pass, password, salt) {
    const passTest = scryptSync(pass, salt, 16);
    const passHash = Buffer.from(password, 'hex');

    const result = timingSafeEqual(passTest, passHash);
    return result;

  }
}

const pass = 'gato897';
const eu = new HashPass(pass);

const {password, salt } = eu.createHash();
console.log(password, salt);

console.log(HashPass.verifyPass(pass, password, salt));