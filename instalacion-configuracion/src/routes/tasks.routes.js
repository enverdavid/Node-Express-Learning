const { Router } = require('express');
const { getTasksCtrl, getTaskByIdCtrl, postTaskControl } = require('../controllers/tasks.controller');

const router = Router();

router.get('/tasks', getTasksCtrl); // Obtener la lista de tareas
router.get('/tasks/:id', getTaskByIdCtrl); // Obtener una tarea por su id
router.post('/tasks', postTaskControl); // Completar la lógica -> actividad
router.put('/tasks/:id'); // Completar la lógica -> actividad
router.delete('/tasks/:id'); // Completar la lógica -> actividad

module.exports = router;
