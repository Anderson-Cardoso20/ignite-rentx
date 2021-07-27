import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseState } from "./CreateSpecificationUseCase";


const specificationsRepository = new SpecificationsRepository();
const createSpecificationUseCase = new CreateSpecificationUseState(specificationsRepository);
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);


export {createSpecificationController};