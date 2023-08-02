import express  from "express";
import BooksController from "../controllers/booksController.js";

const bookRouter = express.Router()

bookRouter
  .get("/books", BooksController.getBookAll)

export default bookRouter