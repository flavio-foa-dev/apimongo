import jwt from 'jsonwebtoken';

const payload = {
  userId: 123,
  username: 'Flavio Foa',
  role: ['admin'],
};
const secretKey = 'nbjuiowd784jksd90';
const expiresIn = { expiresIn: 60 * 60 };

export  function generateToken(req, res) {
  try {
    const token = jwt.sign(payload, secretKey,  expiresIn);
    console.log(token);
    res.status(200).json({Bearer: token});
  } catch (error) {

    console.error('Erro ao gerar o token JWT:', error);
    return null;
  }
}


