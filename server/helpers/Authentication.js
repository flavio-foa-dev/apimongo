import jwt from 'jsonwebtoken';
import 'dotenv/config';
const secretKey = process.env.JWT_SECRET_KEY;

export class Authentication {

  constructor(payload) {
    this.payload = payload;
  }

  generateToken(){
    const token = jwt.sign(this.payload, secretKey, {expiresIn: '1h'});
    return {token: token};
  }


}

const eu = new Authentication({email:'foa@foa'});
console.log(eu.generateToken());