import { Router } from 'express';
import { ClassesController } from './controllers';

const routes = Router();

routes.post('/classes', ClassesController.store);

export default routes;
