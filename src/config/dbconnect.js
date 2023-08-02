import mongoose from "mongoose";
try {
  mongoose.connect('mongodb+srv://foa:J5sflAvyK8bssjp0@books.1fuvga1.mongodb.net/?retryWrites=true&w=majority')

} catch (error) {
  console.log(error.message)
}

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));


const db = mongoose.connection

export default db