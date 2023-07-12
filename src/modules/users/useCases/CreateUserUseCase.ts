import { prisma } from '../../../database';
import { hash } from 'bcryptjs';

interface ICreateUser {
  username: string;
  password: string;
};

class CreateUserUseCase {
  async execute({ username, password }: ICreateUser){
    // Receber dados

    // Verificar se username ja existe
    const userExists = await prisma.user.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive',
        },
      },
    });

    if(userExists){
      throw new Error('User already exists');
    };

    // Fazer hash da senha
    const passwordHash = await hash(password, 6);

    // Salvar no banco de dados
    const user = await prisma.user.create({
      data: {
        username,
        password: passwordHash,
      },
    });

    return user;
  };
};

export { CreateUserUseCase };