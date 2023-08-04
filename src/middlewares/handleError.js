import mongoose from "mongoose"
import ErrorHandler from "../errors/Error.js"

function err(err) {
  const error = err.name
  const message = {
    CastError : "format id invalid",
    null : "not found",
    ValidationError: "field required",
    MongoServerError: "customer already registered"
  }
  return message[error]
}

const handleError = (error, req, res, next) => {
  err(error, "testando")
  res.status(400).json({message : err(error)})
  next()
}

export default handleError
