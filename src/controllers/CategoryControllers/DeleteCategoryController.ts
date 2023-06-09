import { Request, Response } from "express";

import { DeleteCategoryService } from "../../services/CategoryServices/DeleteCategoryService";

export class DeleteCategoryController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteCategoryService = new DeleteCategoryService();

    const result = await deleteCategoryService.execute(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(200).end();
  }
}
