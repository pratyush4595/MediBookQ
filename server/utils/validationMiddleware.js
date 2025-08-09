const validationMiddleware = (validationResult) => {
    return (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Invalid data'
            });
        }

        next();
    }
}

module.exports = validationMiddleware;