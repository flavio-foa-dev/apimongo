
import ModelCustumer from '../models/ModelCustumer.js';

export default class CustumerController {

  static getCustumerAll = async(req, res, next) => {
    try {
      const result = await ModelCustumer.find()
        .populate('owner').exec();

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };

  static getCustumerById = async(req, res, next) => {
    const id = req.params.id;
    try {
      const result = await ModelCustumer.findById(id)
        .populate('owner').exec();

      if(!result) {
        return res.status(404).json({ message: 'Custumer not found'});
      }

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };

  static save = async (req, res, next) => {
    try {
      const custumer = new ModelCustumer(req.body);
      await custumer.save();
      return res.status(200).json(custumer);
    } catch (error) {
      next(error);
    }
  };

  static updateCustumer = async (req, res, next) => {
    const id = req.params.id;
    try {
      await ModelCustumer.findByIdAndUpdate(id, {$set: req.body});
      res.status(200).send({message: 'Custumer atualizado com sucesso'});
    } catch (error) {
      next(error);
    }
  };

  static async destroy(req, res, next) {
    const {id} = req.params;
    try {
      await ModelCustumer.findByIdAndDelete(id);
      res.status(200).json({message: 'excluido with sucess'});

    } catch (error) {
      next(error);
    }
  }
}
