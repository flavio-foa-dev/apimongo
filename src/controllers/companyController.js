
import Modelcompany from '../models/ModelCompany.js';
import ModelPerson from '../models/ModelPerson.js';


export default class CompanyController {

  static getcompanyAll = async(req, res, next) => {
    try {
      const {limit = 3, offset = 0} = req.query;
      const result = await Modelcompany
        .find()
        .sort({name: 1})
        .skip(offset * limit)
        .limit(limit)
        .populate('owner')
        .exec();

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
      const {name, type, owner} = req.query;

      const filters = {};
      if(name) filters.name = new RegExp(name, 'gi');
      if(name) filters.type = {$regex: type, $options: 'i'};
      if(owner){
        const personName = await ModelPerson.findOne({name: owner});
        if(!personName){
          return res.status(200).json([]);
        }
        filters.owner = personName._id;
      }
      const result = await Modelcompany.find(filters)
        .populate('owner');
      if(!result) return res.status(404).json({message:'not found'});
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
