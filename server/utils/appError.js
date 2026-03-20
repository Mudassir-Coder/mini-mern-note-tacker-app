class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    // 4xx errors are 'fail', 5xx errors are 'error'
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true; // Marks it as a known, handled error

    Error.captureStackTrace(this, this.constructor);
  }
}
export default AppError;
