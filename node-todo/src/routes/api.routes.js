import express from 'express';
import cors from 'cors';
import { helloController, todoController } from '../controllers';

const router = express.Router();

router.use(cors());
router.use(express.json());

router.get('/hello', helloController.get);
router.get('/todos', todoController.getAll);
router.get('/todos/:id', todoController.getOne);
router.post('/todos', todoController.insertOne);
router.delete('/todos/:id', todoController.deleteOne);

export default router;