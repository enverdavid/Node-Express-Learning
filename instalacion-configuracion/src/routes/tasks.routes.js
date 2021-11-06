const { Router } = require('express');
const {
  getTasksCtrl,
  getTaskByIdCtrl,
  postTaskControl,
  putTaskCtrl,
  deleteTaskCtrl,
} = require('../controllers/tasks.controller');

const router = Router();

router.get('/tasks', getTasksCtrl); // Obtener la lista de tareas
router.get('/tasks/:id', getTaskByIdCtrl); // Obtener una tarea por su id
router.post('/tasks', postTaskControl); // Completar la lógica
router.put('/tasks/:id', putTaskCtrl); // Completar la lógica
router.delete('/tasks/:id', deleteTaskCtrl); // Completar la lógica

module.exports = router;
