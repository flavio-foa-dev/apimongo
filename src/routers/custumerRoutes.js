import express  from 'express';
import CustumerController from '../controllers/CustumerController.js';

const custumerRouter = express.Router();

custumerRouter
  .get('/api/custumer/:id', CustumerController.getCustumerById)
  .get('/api/custumer', CustumerController.getCustumerAll)
  .post('/api/custumer', CustumerController.save)
  .put('/api/custumer/:id', CustumerController.updateCustumer)
  .delete('/api/custumer/:id', CustumerController.destroy);

export default custumerRouter;