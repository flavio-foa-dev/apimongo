import  express  from 'express';
import url from 'url';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3002;


const pathAtual = url.fileURLToPath(import.meta.url);
const pathHTML = path.join(pathAtual, '../', 'public');
app.use(express.static(pathHTML));


app.listen(PORT, ()=> console.log('listening on port', PORT));