import app from './src/app.js';
const PORT_URL = process.env.PORT || 3005;

app.listen(PORT_URL, ()=> console.log('listem in Port', PORT_URL));