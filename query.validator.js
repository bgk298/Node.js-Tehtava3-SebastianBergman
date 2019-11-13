const validateQuery = (req, res, next ) => {
    const action = req.query.action;

    if (action && !(action === 'today' || action === ' tomorrow')) {
        //res.status(400).send('Virheellinen action');
        const error = new Error('Virheellinen action');
        error.statusCode = 400;
        next(error);
    }

    next();
}

module.exports = validateQuery;