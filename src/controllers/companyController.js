
import Modelcompany from '../models/ModelCompany.js';

export default class CompanyController {

  static getcompanyAll = async(req, res, next) => {
    try {
      const result = await Modelcompany.find()
        .populate('owner').exec();

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };

  static getcompanyById = async(req, res, next) => {
    const id = req.params.id;
    try {
      const result = await Modelcompany.findById(id)
        .populate('owner').exec();

      if(!result) {
        return res.status(404).json({ message: 'company not found'});
      }

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };

  static async getcompanyByfilter(req, res, next) {
    try {
      const {company, person} = req.query;

      const result = await Modelcompany.find({'company': query});
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  static save = async (req, res, next) => {
    try {
      const company = new Modelcompany(req.body);
      await company.save();
      return res.status(200).json(company);
    } catch (error) {
      next(error);
    }
  };

  static updatecompany = async (req, res, next) => {
    const id = req.params.id;
    try {
      await Modelcompany.findByIdAndUpdate(id, {$set: req.body});
      res.status(200).send({message: 'company atualizado com sucesso'});
    } catch (error) {
      next(error);
    }
  };

  static async destroy(req, res, next) {
    const {id} = req.params;
    try {
      await Modelcompany.findByIdAndDelete(id);
      res.status(200).json({message: 'excluido with sucess'});

    } catch (error) {
      next(error);
    }
  }
}
