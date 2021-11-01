// 01 Importamos la dependencia de Express
const { urlencoded } = require('express');
const express = require('express');

// 02 Creamos una instancia de Express
const app = express();

// 03 Definimos el puerto
const PORT = 8000;

// --------------------------------------------------------------------------------------------------------
// Middlewares -> Es una función que hace de intermediario entre la petición y respuesta asia el cliente
// request | response

// Middleware incorporado (built-in)
app.use(express.urlencoded({extended: true}));// Atiende cualquier tipo de petición y respuesta hacia el cliente
// app.use(express.urlencoded({extended: true})) -> Decodifica los datos que son enviados a través de x-www-urlencoded
// y los coloca en request.body


app.get('/', (request, response) => {
  console.log(request.url);
  response.send('Hi there, I am Enver');
}); // Atiende peticiones a través del método get

app.get('/tareas', (request, response) => {
  response.json([{
    tarea01: 'Hacer React',
    tarea02: 'Hacer Node',
  }]);
});

app.post('/tasks', (request, response) => {
  console.log(request.body);
}); // Atiende peticiones a través del método post;
// --------------------------------------------------------------------------------------------------------

// 04 Configuramos app para escuchar sobre un puerto
app.listen(PORT, () => {
  console.log(`Informo que el servidor ya está escuchando sobre el puerto: ${PORT}`);
});