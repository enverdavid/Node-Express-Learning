const { Router } = require('express');
const { getTasksCtrl } = require('../controllers/tasks.controller');

const router = Router();

router.get('/task', getTasksCtrl); // Obtener la lista de tareas
router.get('/task/:id'); // Obtener una tarea por su id

module.exports = router;
