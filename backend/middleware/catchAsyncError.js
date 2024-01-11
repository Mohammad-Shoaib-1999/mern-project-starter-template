// Export a higher-order function that wraps a function with error handling
module.exports = (theFunc) => (req, res, next) => {
    // Use Promise.resolve to handle both synchronous and asynchronous functions
    Promise.resolve(theFunc(req, res, next)).catch(next);
};
