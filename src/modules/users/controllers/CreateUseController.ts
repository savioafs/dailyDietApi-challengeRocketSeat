import { Request, Response } from 'express';
import { CreateUserUseCase } from '../useCases/CreateUserUseCase';

class CreateUserController {
  async handle(req: Request, res: Response){
    const { username, password } = req.body;

    const createUserUseCase = new CreateUserUseCase();

    const user = await createUserUseCase.execute({
      username,
      password,
    });

    return res.status(201).json(user);
  };
};

export { CreateUserController };