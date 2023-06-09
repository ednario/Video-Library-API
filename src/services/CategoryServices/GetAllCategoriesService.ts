import { getRepository } from "typeorm";
import { Category } from "../../entities/Category";

export class GetAllCategoriesService {
  async execute(): Promise<Category[]> {
    const repo = getRepository(Category);

    const categories = repo.find();

    return categories;
  }
}
