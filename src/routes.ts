import { Router } from 'express';
import { CreateUserController } from './modules/users/controllers/CreateUseController';
import { CreateMealController } from './modules/meals/controllers/CreateMealController';
import { AuthenticateUserController } from './modules/users/controllers/AuthenticateUserController';
import { UpdateMealController } from './modules/meals/controllers/UpdateMealControllers';
import { DeleteMealController } from './modules/meals/controllers/DeleteMealController';
import { FindOneMealController } from './modules/meals/controllers/FindOneMealController';
import { FindAllMealsUserController } from './modules/users/controllers/FindAllMealsUserControllers';

const routes = Router();

// Users Controllers
const createUserController = new CreateUserController();
const authenticaUserController = new AuthenticateUserController();
const findAllMealsUserController = new FindAllMealsUserController();

// Meals Controllers
const createMealController = new CreateMealController();
const updateMealController = new UpdateMealController();
const deleteMealController = new DeleteMealController();
const findOneMealController = new FindOneMealController();


// Users Routes
routes.post('/users', createUserController.handle);
routes.post('/users/login', authenticaUserController.handle);
routes.get('/users/meals/:id', findAllMealsUserController.handle);

// Meals Routes
routes.post('/meals', createMealController.handle);
routes.put('/meals/:id', updateMealController.handle);
routes.delete('/meals/:id', deleteMealController.handle);
routes.get('/meals/:id', findOneMealController.handle);


export { routes };