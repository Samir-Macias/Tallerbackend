const unauthorized_handler = (req, res, next) => {
    const error = new Error('Unauthorized access - Authentication required');
    res.status(401);
    next(error); 
};

export default unauthorized_handler
