import { Request, Response } from 'express';
import { CreateMealUseCase } from '../useCases/CreateMealUseCase';


class CreateMealController {
  async handle(req: Request, res: Response){
    const { name, id_user, description, is_diet } = req.body;

    const createMealUseCase = new CreateMealUseCase();

    const meal = await createMealUseCase.execute({
      name,
      id_user,
      description,
      is_diet,
    });

    return res.status(201).json(meal);
  };
};

export { CreateMealController };