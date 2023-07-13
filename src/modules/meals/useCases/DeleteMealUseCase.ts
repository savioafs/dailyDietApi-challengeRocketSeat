import { prisma } from '../../../database';


class DeleteMealUseCase {
  async execute(id: string){

    await prisma.meal.delete({
      where: {
        id
      },
    });
  };
};

export { DeleteMealUseCase };