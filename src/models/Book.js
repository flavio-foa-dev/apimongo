import mongoose from "mongoose"

const booksSchema = new mongoose.Schema(
  {
    id: { type: String},
    title: { type: String, required: true },
    author: { type: String, required: true },
    page: { type: Number, required: true}
  }
)

const BooksModel = mongoose.model('books', booksSchema)

export default BooksModel