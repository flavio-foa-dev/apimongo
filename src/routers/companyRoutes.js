import express  from 'express';
import companyController from '../controllers/companyController.js';

const companyRouter = express.Router();

companyRouter
  .get('/api/company', companyController.getcompanyAll)
  .get('/api/company/filter', companyController.getcompanyByfilter)
  .get('/api/company/:id', companyController.getcompanyById)
  .post('/api/company', companyController.save)
  .put('/api/company/:id', companyController.updatecompany)
  .delete('/api/company/:id', companyController.destroy);

export default companyRouter;