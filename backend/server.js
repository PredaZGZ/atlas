const database = require('./api/config/Database');
const config = require('./api/config/config');
const app = require('./api/app');

database.connect();

// Puerto de escucha del servidor
app.listen(config.PORT, () => {
  console.log(`Servidor backend iniciado en el puerto ${config.PORT}`);
});
