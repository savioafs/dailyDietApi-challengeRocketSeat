import { prisma } from '../../../database';

interface IUpdateMeal {
  id_meal: string;
  name: string;
  description: string;
  is_diet: boolean;
};

class UpdateMealUseCase {
  async execute({ id_meal, name, description, is_diet }: IUpdateMeal){

    const mealExists = await prisma.meal.findFirst({
      where: {
        id: id_meal,
      },
    });

    if(!mealExists) {
      throw new Error('Meal does not exists');
    };

    const mealUpdate = await prisma.meal.update({
      data: {
        name,
        description,
        is_diet
      }
    })

  };
};

export { UpdateMealUseCase };