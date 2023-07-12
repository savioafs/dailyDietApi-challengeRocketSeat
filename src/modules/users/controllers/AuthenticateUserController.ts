import { AuthenticateUserUseCase } from '../useCases/AuthenticateUserUseCase';
import { Request, Response } from 'express';

class AuthenticateUserController {
  async handle(req: Request, res: Response){

    const { username, password } = req.body;

    const authenticateUserUsecase = new AuthenticateUserUseCase();

    const login = await authenticateUserUsecase.execute({
      username,
      password,
    });

    return res.status(200).json(login);
  };
};

export { AuthenticateUserController };