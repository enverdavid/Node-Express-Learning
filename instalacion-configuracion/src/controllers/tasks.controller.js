const {
  getAllTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
} = require('../services/tasks.services');

const getTasksCtrl = async (request, response, next) => {
  try {
    const tasks = await getAllTasks();
    response.json(tasks);
  } catch (error) {
    next(error);
  }
};

const getTaskByIdCtrl = async (request, response, next) => {
  const { id } = request.params;
  const idInt = parseInt(id, 10);
  try {
    const task = await getTaskById(idInt);
    response.json(task);
  } catch (error) {
    next(error);
  }
};

const postTaskControl = async (req, res, next) => {
  const { title, description } = req.body; // Desestructuramos
  try {
    const newTask = {
      title,
      description,
    };
    // Enviamos la tarea al servicio
    const response = await addTask(newTask);
    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

const putTaskCtrl = async (req, res, next) => {
  const { id } = req.params;
  try {
    const task = req.body;
    // Enviamos la tarea al servicio
    await updateTask(parseInt(id, 10), task);
    res.status(204).json();
  } catch (error) {
    next(error);
  }
};

const deleteTaskCtrl = async (req, res, next) => {
  const { id } = req.params; // Desestructuramos
  try {
    // Enviamos la tarea al servicio
    await deleteTask(parseInt(id, 10));
    res.status(204).json();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getTasksCtrl,
  getTaskByIdCtrl,
  postTaskControl,
  putTaskCtrl,
  deleteTaskCtrl,
};
