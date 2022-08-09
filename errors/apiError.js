class ApiError extends Error {
  constructor(message, code) {
    super(message);
    this.message = message;
    this.code = code;
  }
}

const createCustomError = (msg, code) => {
  throw new ApiError(msg, code);
};

module.exports = { ApiError, createCustomError };
