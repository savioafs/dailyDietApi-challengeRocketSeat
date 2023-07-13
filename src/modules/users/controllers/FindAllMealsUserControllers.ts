import { Request, Response } from 'express';
import { FindAllMealsUserUseCase } from '../useCases/FindAllMealsUserUseCase';

class FindAllMealsUserController {
  async handle(req: Request, res: Response){
    const { id_user }  = req;

    const findAllMealsUserUseCase = new FindAllMealsUserUseCase();

    const mealsByUser = await findAllMealsUserUseCase.execute(id_user);

    return res.status(200).json(mealsByUser);
  };
};

export { FindAllMealsUserController };