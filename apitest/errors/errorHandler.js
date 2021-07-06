class ErrorHandler{
  constructor(status,message){
    this.status = status;
    this.message = message;
  }
  static ValidationError(message="All fields required"){
    return new ErrorHandler(422,message);
  }

  static notFoundError(message="Not found"){
    return new ErrorHandler(404,message);
  }

  static serverError(message="Internal error"){
    return new ErrorHandler(500,message);
  }

  static badRequestError(message="bad request"){
    return new ErrorHandler(400,message);
  }
}

module.exports = ErrorHandler;