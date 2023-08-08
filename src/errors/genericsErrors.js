import mongoose from 'mongoose';


class ErrorHandler extends Error {
  constructor(message = 'Internal Error', status = 500) {
    super();
    this.message = message;
    this.status = status;
  }

  sendMessage(res) {
    res
      .status(this.status)
      .json(
        {
          message: this.message,
          status: this.status
        }
      );
  }
}

export default ErrorHandler;



mongoose.Schema.Types.String.set('validate', {
  validator: (valor) => valor !== '',
  message: ({ path }) => `O campo ${path} foi fornecido em branco.`
});