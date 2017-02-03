import {PetFormService} from "./pet-form.service";
import {Pet} from "../pet";
import {Type} from "../type";
import {OwnerDetailsService} from "../../owner/details/owner-details.service";

export class PetFormController {

    public static $inject: [string] = ["petFormService", "ownerDetailsService", "$state"];
    private pet: Pet;
    private types: Type[];
    private ownerId: number;
    
    constructor(private petFormService: PetFormService, private ownerDetailsService: OwnerDetailsService, private $state: ng.ui.IStateService){        
    }
    
    $onInit() {
        this.ownerId = this.$state.params["ownerId"];
        this.petFormService.getPetTypes().then(types => this.types = types);
        
        let petId = this.$state.params["petId"] || 0;

            if (petId) { // edit
                this.petFormService.get(this.ownerId, petId).then(pet => {
                    this.pet = pet;
                    this.pet.birthDate = new Date(this.pet.birthDate);
                });
            } else {
                this.ownerDetailsService.get(this.ownerId).then( owner => {
                    this.pet = <Pet> {
                        owner: owner.firstName + " " + owner.lastName,
                        type: <Type> {
                            id: 1
                        }
                    };
                })

            }
    }
    
    submit() {
        this.petFormService.createOrUpdate(this.pet, this.ownerId).then(() => this.$state.go("owners", {ownerId: this.ownerId}));    
    }
}
