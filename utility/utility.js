const jwt = require('jsonwebtoken');
module.exports = {
    GenerateToken(payload)
    {   
        const token =  jwt.sign({payload}, 'secretkey', { expiresIn: '24h' }) // expires in 24 hours
        const obj = {
            success: true,
            message: 'Token Generated Successfully!!',
            token: token
        }
        return obj;
    }
}
