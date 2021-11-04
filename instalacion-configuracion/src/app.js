const express = require('express');
const tasksRoutes = require('./routes/tasks.routes');

const app = express();

/*
- routes -> Se encarga de agrupar las rutas y delega la solicitud/respuesta al controlador.
- controllers ->
  1. Se encarga de dar respuesta a la solicitud
  2. Obtener los datos de los servicios.
  3. Extraer datos de la solicitud y pasarselos a los servicios.
- services ->
  1. Obtener los datos desde una fuente.
  2. Regresar los datos hacia el controlador
  3. Tratar los datos con respecto a los parámetros definidos en el controlador.
*/

// routs -> controllers -> services

app.use(tasksRoutes);

module.exports = app;
