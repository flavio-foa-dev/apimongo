import jwt from 'jsonwebtoken';
import 'dotenv/config';
const secretKey = process.env.JWT_SECRET_KEY;

export class Authentication {

  constructor(payload) {
    this.payload = payload;
  }

  generateToken(){
    const token = jwt.sign(this.payload, secretKey, {expiresIn: '1h'});
    return token;
  }

  checkToken(token) {
    return jwt.verify(token, secretKey);
  }


}

const eu = new Authentication({email:'foa@foa'});
const eu2 = eu.generateToken();
console.log(eu2);

const eu3 = eu.checkToken(eu2);
console.log('valid',eu3.email);