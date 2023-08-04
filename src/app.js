import express  from 'express';
import db from './config/dbconnect.js';
import routes from './routers/index.js';
import hendleError from './middlewares/handleError.js';

db.on('error', console.log.bind(console, 'Error de conexao com o banco de dados'));
db.once('open', ()=> console.log('O Sistema Iniciado'));

const app = express();
app.use(express.json());
routes(app);
app.use(hendleError);

export default app;
