import { Request, Response } from 'express';
import { FindOneMealUseCase } from '../useCases/FindOneMealUseCase';

class FindOneMealController {
  async handle(req: Request, res: Response){
    
    const { id } = req.params;

    const findOneMealUseCase = new FindOneMealUseCase();

    const meal = await findOneMealUseCase.execute(id);

    return res.status(200).json(meal);
  };
};

export { FindOneMealController };