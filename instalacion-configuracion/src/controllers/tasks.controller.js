const { getAllTasks, getTaskById } = require('../services/tasks.services');

const getTasksCtrl = async (request, response, next) => {
  try {
    const tasks = await getAllTasks();
    response.json(tasks);
  } catch (error) {
    next(error);
  }
};

const getTaskByIdCtrl = async (request, response) => {
  const { id } = request.params;
  const idInt = parseInt(id, 10);
  try {
    const task = await getTaskById(idInt);
    response.json(task);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getTasksCtrl,
  getTaskByIdCtrl,
};
