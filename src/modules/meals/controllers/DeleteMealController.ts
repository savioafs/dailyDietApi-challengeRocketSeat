import { Request, Response } from 'express';
import { DeleteMealUseCase } from '../useCases/DeleteMealUseCase';

class DeleteMealController {
  async handle(req: Request, res: Response){
    const { id } = req.params;

    const deleteMealUseCase = new DeleteMealUseCase();

    await deleteMealUseCase.execute(id);

    return res.status(200).json();
  };
};

export { DeleteMealController };

