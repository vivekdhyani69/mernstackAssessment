// Global Express error handling middleware
// Create an Express.js middleware errorHandler that:
// ●	Catches all unhandled errors

// ●	Logs the error message and stack trace

// ●	Responds with { "error": "Something went wrong" } and status: 500

 
function errorHandler(err, req, res, next) {
  console.error("Error Message:", err.message);
  console.error("Stack Trace:", err.stack);

  res.status(500).json({
    error: "Something went wrong"
  });
}

module.exports = errorHandler;
