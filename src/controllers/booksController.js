import ModelCustumer from "../models/ModelCustumer.js";
import { ObjectId } from 'mongodb'

function isValidId(id) {
  try {
    return new ObjectId(id).toString() === id;
  } catch (error) {
    return false
  }
}

export default class BooksController {

  static getBookAll = async(req, res, next) => {
    try {
      const result = await ModelCustumer.find()
      console.log("todos os dados", result)
      res.status(200).json(result)
    } catch (error) {
      next(error)
    }
  }

  static getBookById = async(req, res, next) => {
    const id = req.params.id
    try {
      const result = await ModelCustumer.findById(id)
      if(!result) {
       return res.status(404).json({ message: 'Book not found'})
      }
      res.status(200).json(result)
    } catch (error) {
      next(error);
    }
  }

  static save = async (req, res, next) => {
    try {
      const book = new ModelCustumer(req.body)
      await book.save()
      return res.status(200).json(book)
    } catch (error) {
    next(error)
    }
  }

  static updatee = async (req, res) => {
    const id = req.params.id
    try {
      await ModelCustumer.findByIdAndUpdate(id, {$set: req.body})
      res.status(200).send({message: 'Livro atualizado com sucesso'})
    } catch (error) {
      res.status(500).send({message: err.message})
    }
  }

  static async destroy(req, res) {
    const {id} = req.params
    try {
     await ModelCustumer.findByIdAndDelete(id)
      res.status(200).json({message: "excluido with sucess"})

    } catch (error) {
      res.status(500).json({message: error.message})
    }
  }
}
