import express from 'express';
import checkAuth from '../middlewares/checkAuth.js';
import checkAdmin from '../middlewares/checkAdmin.js';
import * as taskController from '../controllers/taskController.js';

const router = express.Router();

router.use(checkAuth);

router.post('/task', taskController.createTask);
router.post('/task/all', checkAdmin, taskController.getAllTasks);
router.get('/task', taskController.getTasksByUserId);
router.get('/task/:id', taskController.getTask);
router.put('/task/:id', taskController.updateTask);
router.delete('/task/:id', taskController.deleteTask);

export default router;
