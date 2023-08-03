import BooksModel from "../models/Book.js";
import { ObjectId } from 'mongodb'

function isValidId(id) {
  try {
    return new ObjectId(id).toString() === id;
  } catch (error) {
    return false
  }
}

export default class BooksController {

  static getBookAll = async(req, res) => {
    try {
      const result = await BooksModel.find()
      res.status(200).json(result)

    } catch (error) {
      res.status(500).json(err.message);
    }

  }

  static getBookById = async(req, res) => {
    const id = req.params.id
    const idvalid = isValidId(id)
    try {
      const result = await BooksModel.findById(id)
      console.log(result)
      res.status(200).json(result)

    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static save = async (req, res) => {
    const book = new BooksModel(req.body)
    book.save()

    res.status(200).json(book)
  }

  static updatee = async (req, res) => {
    const id = req.params.id
    const idvalid = isValidId(id)
    const book = req.body
    console.log("id es valid",idvalid)
    console.log(book, "chamada req.body")

    BooksModel.updateOne({_id:id}, book)


  }
}
