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