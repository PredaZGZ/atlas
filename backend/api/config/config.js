
module.exports = {
    PORT: process.env.SERVER_PORT || 5001,
    DB: process.env.ATLAS_URI || 'mongodb://127.0.0.1:27017/atlas',
    JWT_SECRET: process.env.TOKEN_SECRET || "TOKEN_SECRETT"
}