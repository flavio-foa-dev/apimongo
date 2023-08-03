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
      res.status(200).json(result)

    } catch (error) {
      res.status(500).json(error.message, "id do livro nao encontrado" );
    }
  }

  static save = async (req, res) => {
    const book = new BooksModel(req.body)
    book.save()

    res.status(200).json(book)
  }

  static updatee = async (req, res) => {
    const id = req.params.id

    try {
      await BooksModel.findByIdAndUpdate(id, {$set: req.body})
      res.status(200).send({message: 'Livro atualizado com sucesso'})
    } catch (error) {
      res.status(500).send({message: err.message})
    }

  }

  static async destroy(req, res) {
    const {id} = req.params
    try {
     await BooksModel.findByIdAndDelete(id)
      res.status(200).json({message: "excluido with sucess"})

    } catch (error) {
      res.status(500).json({message: error.message})
    }

  }
}
