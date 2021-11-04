const { Router } = require('express');
const { getTasksCtrl, getTaskByIdCtrl } = require('../controllers/tasks.controller');

const router = Router();

router.get('/tasks', getTasksCtrl); // Obtener la lista de tareas
router.get('/tasks/:id', getTaskByIdCtrl); // Obtener una tarea por su id

module.exports = router;
