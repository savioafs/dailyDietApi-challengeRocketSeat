import { prisma } from '../../../database';

interface IUpdateMeal {
  id: string;
  name: string;
  description: string;
  is_diet: boolean
}

class UpdateMealUseCase {
  async execute({ id, name, description, is_diet }: IUpdateMeal){
    
    await prisma.meal.updateMany({
      where: {
        id,
      }, data: {
        name, 
        description,
        is_diet,
      },
    });

    const mealUpdated = await prisma.meal.findFirst({
      where: {
        id
      },
    });

    return mealUpdated;
  };
};

export { UpdateMealUseCase };