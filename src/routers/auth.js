import express  from 'express';

import {generateToken} from '../auth/token.js';

const authRouter = express.Router();

authRouter
  .get('/api/auth', generateToken);


export default authRouter;