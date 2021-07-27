import {Request, Response} from "express";
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationUseState } from "./CreateSpecificationUseCase";


class CreateSpecificationController{

    constructor(private createSpecificationUseCase: CreateSpecificationUseState){}

    handle(request:Request, response:Response): Response{
        const {name, description} = request.body;
       this.createSpecificationUseCase.execute({name, description});
            SpecificationsRepository
       return response.status(201).send();
    }
}

export {CreateSpecificationController};