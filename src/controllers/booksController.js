import BooksModel from "../models/Book.js";

export default class BooksController {

  static getBookAll = async(req, res) => {
    try {
      const result = await BooksModel.find()
      res.status(200).json(result)

    } catch (error) {
      res.status(500).json(err.message);
    }

  }

  static save = async (req, res) => {
    BooksModel.save(req.body)
  }
}
