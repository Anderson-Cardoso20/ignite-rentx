import {request, response, Router} from "express";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
import { CreateSpecificationUseState } from "../modules/cars/useCases/createSpecification/CreateSpecificationUseCase";

const specificationsRoutes = Router();


specificationsRoutes.post("/", (request, response)=>{
   return createSpecificationController.handle(request, response);
});

export{ specificationsRoutes};