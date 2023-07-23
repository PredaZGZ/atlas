const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors())

//Capturar Body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Carga de rutas
const verifyToken = require('./routes/auth/validateToken');
const Auth = require('./routes/auth/auth'); 
const Vault = require('./routes/vault');

//Routes Middlewares
 app.use('/auth', Auth);
 app.use('/vault', verifyToken, Vault);

module.exports = app