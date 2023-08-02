import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
const connect_key = process.env.DB_CONNECTION


mongoose.connect(connect_key)



// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));


const db = mongoose.connection

export default db