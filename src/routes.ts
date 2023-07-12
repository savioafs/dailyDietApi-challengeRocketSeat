import { Router } from 'express';
import { CreateUserController } from './modules/users/controllers/CreateUseController';
import { CreateMealController } from './modules/meals/controllers/CreateMealController';
import { AuthenticateUserController } from './modules/users/controllers/AuthenticateUserController';

const routes = Router();

const createUserController = new CreateUserController();
const createMealController = new CreateMealController();
const authenticaUserController = new AuthenticateUserController();

routes.post('/users', createUserController.handle);
routes.post('/users/login', authenticaUserController.handle);

routes.post('/meals', createMealController.handle);

export { routes };