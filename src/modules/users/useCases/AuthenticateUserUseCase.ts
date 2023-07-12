import { prisma } from '../../../database';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface IAuthenticateUser {
  username: string;
  password: string;
}

class AuthenticateUserUseCase {
  async execute({ username, password }: IAuthenticateUser){
    
    const user = await prisma.user.findFirst({
      where: {
        username,
      },
    });

    if(!user) {
      throw new Error('Username or password invalid');
    };

    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch) {
      throw new Error('Username or password invalid');
    };

    const token = sign({ username }, '5d7c2445bd79548fd47058aaceea4dc4', {
      subject: user.id,
      expiresIn: '1d',
    });

    return token;
  };
};

export { AuthenticateUserUseCase };