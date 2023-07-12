import { prisma } from '../../../database';

interface ICreateMeal {
  name: string;
  id_user: string;
  description: string;
  is_diet: boolean;
}

class CreateMealUseCase{
  async execute({ name, id_user, description, is_diet }: ICreateMeal){

    const meal = await prisma.meal.create({
      data: {
        name,
        id_user,
        description,
        is_diet,
      },
    });

    return meal;
  };
};

export { CreateMealUseCase };