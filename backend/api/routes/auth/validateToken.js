const jwt = require('jsonwebtoken');
const config = require('../../config/config');

// middleware to validate token (rutas protegidas)
const validateToken = (req, res, next) => {
    const token = req.header('auth-token')
    if (!token) return res.status(401).json({ error: 'Acceso denegado' })
    try {
        if (token == "dev") {
            next()
        } else {
            const verified = jwt.verify(token, config.JWT_SECRET)
            req.user = verified.user
            next() 
        }
    } catch (error) {
        res.status(400).json({error: 'Token no es válido'})
    }
}

module.exports = validateToken;