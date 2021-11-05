const { Router } = require('express');
const { getTasksCtrl, getTaskByIdCtrl } = require('../controllers/tasks.controller');

const router = Router();

router.get('/tasks', getTasksCtrl); // Obtener la lista de tareas
router.get('/tasks/:id', getTaskByIdCtrl); // Obtener una tarea por su id
router.post('tasks'); // Completar la lógica -> actividad
router.post('tasks/:id'); // Completar la lógica -> actividad
router.post('tasks/:id'); // Completar la lógica -> actividad

module.exports = router;
