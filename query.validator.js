const validateQuery = (req, res, next ) => {
    const action = req.query.action;

    if (action && !(action === 'today' || action === ' tomorrow')) {
        const error = new Error('Virheellinen toiminto');
        error.statusCode = 400;
        next(error);
    }

    next();
}

module.exports = validateQuery;