import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCateogoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";


const categoriesRepository = CategoriesRepository.getInstance();
const listaCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesController = new ListCateogoriesController(listaCategoriesUseCase);

export {listCategoriesController};