const { getAllTasks } = require('../services/tasks.services');

const getTasksCtrl = async (request, response) => {
  try {
    const tasks = await getAllTasks();
    response.json(tasks);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getTasksCtrl,
};
