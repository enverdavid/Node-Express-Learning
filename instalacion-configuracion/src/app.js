const express = require('express');
const tasksRoutes = require('./controllers/tasks.controller'); // ???

const app = express();

app.use(tasksRoutes); // ???

module.exports = app;

