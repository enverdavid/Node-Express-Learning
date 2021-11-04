const fs = require('fs/promises');
const path = require('path');

const getAllTasks = async () => {
  // __dirname -> ...Node-Express-Learning/instalacion-configuracion/src/services
  const taskPath = path.resolve(__dirname, '..', 'tasks.json');
  try {
    const tasks = await fs.readFile(taskPath, 'utf-8');
    return JSON.parse(tasks);
  } catch (error) {
    console.log(error);
  }
};

// const getTaskById = () => {};

module.exports = {
  getAllTasks,
};
