import { Request, Response } from 'express';
import { FindAllMealsUserUseCase } from '../useCases/FindAllMealsUserUseCase';

class FindAllMealsUserController {
  async handle(req: Request, res: Response){
    const { id } = req.params;

    const findAllMealsUserUseCase = new FindAllMealsUserUseCase();

    const mealsByUser = await findAllMealsUserUseCase.execute(id);

    return res.status(200).json(mealsByUser);
  };
};

export { FindAllMealsUserController };