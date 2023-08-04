import ModelPerson from "../models/ModelPerson.js"

export default class PersonController {

  static getPersonAll = async(_req, res, next) => {
    try {
      const result = await ModelPerson.find()
      res.status(200).json(result)
    } catch (error) {
      next(error)
    }
  }

  static getPersonById = async(req, res, next) => {
    const id = req.params.id
    try {
      const result = await ModelPerson.findById(id)
      if(!result) {
       return res.status(404).json({ message: 'Person not found'})
      }
      res.status(200).json(result)
    } catch (error) {
      next(error);
    }
  }

  static savePerson = async (req, res, next) => {
    try {
      const person = new ModelPerson(req.body)
      await person.save()
      return res.status(200).json(person)
    } catch (error) {
    next(error)
    }
  }

  static updatePerson = async (req, res) => {
    const id = req.params.id
    try {
      await ModelPerson.findByIdAndUpdate(id, {$set: req.body})
      res.status(200).send({message: 'Person atualizado com sucesso'})
    } catch (error) {
      res.status(500).send({message: err.message})
    }
  }

  static async deletePerson(req, res) {
    const {id} = req.params
    try {
     await ModelPerson.findByIdAndDelete(id)
      res.status(200).json({message: "excluido with sucess"})

    } catch (error) {
      res.status(500).json({message: error.message})
    }
  }
}
