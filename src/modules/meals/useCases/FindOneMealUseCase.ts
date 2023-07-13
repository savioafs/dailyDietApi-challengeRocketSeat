import { prisma } from '../../../database';

class FindOneMealUseCase {
  async execute(id: string) {
    
    const findMeal = await prisma.meal.findFirst({
      where: {
        id
      },
    });

    return findMeal;
  };
};

export { FindOneMealUseCase };