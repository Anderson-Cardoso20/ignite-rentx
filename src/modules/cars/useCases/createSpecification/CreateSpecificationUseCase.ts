import { ICreateSpecificationDTO, ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";


interface IRequest {
    name: string,
    description: string,
}

class CreateSpecificationUseState{
    constructor(private specificationsRepository: ISpecificationsRepository){}
execute({name, description}: IRequest):void{

    const specificationAlreadyExists = this.specificationsRepository.findByName(name);
    if(specificationAlreadyExists){
        throw new Error ("Specification already exists!")
    }

    this.specificationsRepository.create({
        name,
        description
    })
    
}

}
export {CreateSpecificationUseState};