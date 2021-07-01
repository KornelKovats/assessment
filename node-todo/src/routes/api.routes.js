import express from 'express';
import cors from 'cors';
import { helloController, todoController } from '../controllers';

const router = express.Router();

router.use(cors());
router.use(express.json());

router.get('/hello', helloController.get);
router.get('/todos', todoController.getAll);
router.get('/todos/:id', todoController.getOneTodo);
router.post('/todos', todoController.insert);
router.delete('/todos/:id', todoController.deleteOne);

export default router;