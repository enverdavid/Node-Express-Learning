// 01 Importamos la dependencia de Express
const express = require('express');
const morgan = require('morgan');
const fs = require('fs/promises');
const path = require('path');

// 02 Creamos una instancia de Express
const app = express();

// 03 Definimos el puerto
const PORT = 8000;

// --------------------------------------------------------------------------------------------------------
// Middlewares -> Es una función que hace de intermediario entre la petición y respuesta asia el cliente
// request | response

// Middleware incorporado (built-in)
app.use(express.urlencoded({extended: true}));// Atiende cualquier tipo de petición y respuesta hacia el cliente
app.use(express.json());
// app.use(express.urlencoded({extended: true})) -> Decodifica los datos que son enviados a través de x-www-urlencoded
// y los coloca en request.body
// express.json() -> Nos ayuda a obtener los datos que son enviados en formato JSON

// Middleware de terceros (third party)
app.use(morgan('dev'));


app.get('/', (request, response) => {
  response.sendFile(path.resolve('index.html'));
}); // Atiende peticiones a través del método get

app.get('/tasks', async (request, response) => {
  try {
    const tasks = await fs.readFile('tasks.json', 'utf-8');
    response.json(JSON.parse(tasks));
  } catch (error) {
    console.log(error);
  }
});

app.get('/styles.css', (request, response) => {
  response.sendFile(path.resolve('styles.css'));
});

app.get('/imagen-principito', async (request, response) => {
  response.sendFile(path.resolve('imagen_principito.jpeg'));
});

app.post('/tasks', (request, response) => {
  console.log(request.body);
}); // Atiende peticiones a través del método post;

app.put('/tasks/:taskId/:userId', (request, response) => {
  console.log(request.params); // Para poder obtener los parámetros de una url
})

app.delete('/tasks/:taskId', (request, response) => {
  console.log(request.params); // Para poder obtener los parámetros de una url
})
// --------------------------------------------------------------------------------------------------------

// 04 Configuramos app para escuchar sobre un puerto
app.listen(PORT, () => {
  console.log(`Informo que el servidor ya está escuchando sobre el puerto: ${PORT}`);
});

