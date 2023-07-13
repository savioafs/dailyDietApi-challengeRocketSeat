import { prisma } from '../../../database';

class FindAllMealsUserUseCase {
  async execute(id_user: string){

    const meals = await prisma.user.findMany({
      where: {
        id: id_user,
      },
      select: {
        meals: true,
      },
    });

    return meals
  };
};

export { FindAllMealsUserUseCase };