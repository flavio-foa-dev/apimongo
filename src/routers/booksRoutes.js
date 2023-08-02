import express  from "express";
import BooksController from "../controllers/booksController.js";

const bookRouter = express.Router()

bookRouter
.get("/books/:id", BooksController.getBookById)
.get("/books", BooksController.getBookAll)
.post("/books", BooksController.save)
.put("/books/:id", BooksController.updatee)

export default bookRouter