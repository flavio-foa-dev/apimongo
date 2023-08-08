
async function handleFieldSave(err){
  const messageValues = Object.values(err.errors).map((item)=> item.message).join(', ');
  return {message: `field required s ${messageValues}`, status: 400};
}

async function codError(err) {
  const error = err.name;
  const message = {
    CastError : {message:'format id invalid', status: 400},
    null : {message:'not found', status: 404},
    MongoServerError: {message: 'customer already registered', status: 400 },
    ValidationError: handleFieldSave(err),
  };
  return message[error] || {message:'error interno de servidor', status: 500};
}

const handleError = async (error, req, res, _next) => {
  const {message, status} = await codError(error);
  return res.status(status).json(message);

};

export default handleError;
