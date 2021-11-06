const { getAllTasks, getTaskById, addTask } = require('../services/tasks.services');

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

module.exports = {
  getTasksCtrl,
  getTaskByIdCtrl,
  postTaskControl,
};
