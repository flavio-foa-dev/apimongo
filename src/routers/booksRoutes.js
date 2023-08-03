import express  from "express";
import BooksController from "../controllers/booksController.js";

const bookRouter = express.Router()

bookRouter
.get("/api/custumer/:id", BooksController.getBookById)
.get("/api/custumer", BooksController.getBookAll)
.post("/api/custumer", BooksController.save)
.put("/api/custumer/:id", BooksController.updatee)
.delete("/api/custumer/:id", BooksController.destroy)

export default bookRouter