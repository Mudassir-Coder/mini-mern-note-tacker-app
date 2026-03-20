export default (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    // Give developers all the info they need
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      stack: err.stack,
      error: err,
    });
  } else {
    // Production: Don't leak sensitive details
    if (err.isOperational) {
      res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });
    } else {
      // 💥 Programming error: log it and send a generic message
      console.error("ERROR 💥", err);
      res
        .status(500)
        .json({ status: "error", message: "Something went wrong!" });
    }
  }
};
