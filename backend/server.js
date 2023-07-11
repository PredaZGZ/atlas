const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Configuración de la aplicación Express
const app = express();
app.use(express.json());
app.use(cors());

// Configuración de la conexión a la base de datos MongoDB
const uri = 'mongodb://localhost/atlas' || process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });

// Rutas
/* const usersRoutes = require('./routes/users');
app.use('/api/users', usersRoutes); */

// Puerto de escucha del servidor
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Servidor backend iniciado en el puerto ${port}`);
});
