function apiKey(req, res, next){
    const apiKey = '1234567';
    console.log(req.query.api_key);
    if(req.query.api_key !== apiKey){
        return res.status(403).json({
            error: 'Forbidden',
            message: 'Invalid API Key'
        });
    }
    next();
}

module.exports = apiKey;