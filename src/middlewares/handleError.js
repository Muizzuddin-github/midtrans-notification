import ResponseError from "../utility/responseError.js";

function handleError(err, req, res, next) {
  if (!err) {
    next();
    return;
  }

  if (err instanceof ResponseError) {
    res.status(err.getStatusCode).json({
      error: err.message,
      status: err.getStatusMessage,
    });
  } else {
    res.status(500).json({
      status: "Internal Server Error",
      error: err.message,
    });
  }
}

export default handleError;
