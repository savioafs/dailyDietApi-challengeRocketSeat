import { Request, Response } from 'express';
import { UpdateMealUseCase } from '../useCases/UpdateMealUseCase';

class UpdateMealController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { name, description, is_diet } = req.body;

    const updateMealUseCase = new UpdateMealUseCase();

    const meal = await updateMealUseCase.execute({
      id,
      name,
      description,
      is_diet
    });

    return res.status(200).json({ meal :{
      ...meal,
        id_user: undefined,
        id: undefined,
        created_at: undefined,
    } });
  }; 
};

export { UpdateMealController };