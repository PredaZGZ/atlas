const mongoose = require('mongoose');
const config = require('./config');

mongoose.set('strictQuery', true);

module.exports = {
    connection: null,
    connect: () => {
        if (this.connection) return this.connection;
        return mongoose.connect(config.DB, {
            useUnifiedTopology : true,
            useNewUrlParser : true
        }).then(connection => {
            this.connection = connection;
            console.log('Conexión exitosa a la base de datos');
        }).catch(err => console.error('Error al conectar a la base de datos:', error))
    }
}
