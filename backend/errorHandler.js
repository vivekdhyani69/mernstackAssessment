// Global Express error handling middleware

function errorHandler(err, req, res, next) {
  console.error("Error Message:", err.message);
  console.error("Stack Trace:", err.stack);

  res.status(500).json({
    error: "Something went wrong"
  });
}

module.exports = errorHandler;
