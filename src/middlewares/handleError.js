import mongoose from 'mongoose';
import ErrorHandler from '../errors/Error.js';

function handleFieldSave(err){
  const messageValues = Object.values(err.errors).map((item)=> item.message).join(', ');
  return {message: `field required s ${messageValues}`, status: 400};
}

function err(err) {
  const error = err.name;
  const message = {
    CastError : {message:'format id invalid', status: 400},
    null : {message:'not found', status: 404},
    MongoServerError: 'customer already registered',
    ValidationError: handleFieldSave(err),
  };
  return message[error] || {message:'error interno eempty', status: 500};
}

const handleError = (error, req, res, next) => {
  const {message, status} = err(error);
  res.status(status).json(message);
  next();
};

export default handleError;
