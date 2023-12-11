class ResponseError extends Error {
  #status;
  #statusCode;

  constructor(status, statusCode, msg) {
    super(msg);
    this.#status = status;
    this.#statusCode = statusCode;
  }

  get getStatusMessage() {
    return this.#status;
  }
  get getStatusCode() {
    return this.#statusCode;
  }
}

export default ResponseError;
