import express from 'express';
import cors from 'cors';
import { helloController, todoController } from '../controllers';

const router = express.Router();

router.use(cors());
router.use(express.json());

router.get('/hello', helloController.get);
router.get('/todos', todoController.getAll);

export default router;