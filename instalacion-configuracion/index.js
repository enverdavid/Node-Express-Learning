// 01 Importamos la dependencia de Express
const express = require('express');

// 02 Creamos una instancia de Express
const app = express();

// 03 Definimos el puerto
const PORT = 8000;

// --------------------------------------------------------------------------------------------------------
// Middlewares -> Es una función que hace de intermediario entre la petición y respuesta asia el cliente
// request | response

app.get('/', (request, response) => {
  console.log(request.url);
  response.send('Hi there, I am Enver');
}); // Atiende peticiones a través del método get

app.get('/tasks', (request, response) => {
  response.json([{
    task01: 'Cortar cebollas',
    tesk02: 'Cortar beterragas',
  }]);
});
// --------------------------------------------------------------------------------------------------------

// 04 Configuramos app para escuchar sobre un puerto
app.listen(PORT, () => {
  console.log(`Informo que el servidor ya está escuchando sobre el puerto: ${PORT}`);
});